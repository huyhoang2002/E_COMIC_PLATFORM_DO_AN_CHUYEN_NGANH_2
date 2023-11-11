using ComicService.Application.Services.CloudinaryService.Interfaces;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class CreateEpisodeDetailCommand : ICommand<CommandResult<Guid>>
    {
        public Guid ComicId { get; set; }
        public Guid EpisodeId { get; set; }
        public List<string> ImageUrls { get; set; }
    }

    public class CreateEpisodeDetailCommandHandler : ICommandHandler<CreateEpisodeDetailCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;
        private readonly ICloudinaryService _cloudinaryService;

        public CreateEpisodeDetailCommandHandler(IComicRepository comicRepository, ICloudinaryService cloudinaryService)
        {
            _comicRepository = comicRepository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(CreateEpisodeDetailCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic == null)
            {
                return CommandResult<Guid>.Error("No comic found");
            }
            var comicEpisode = comic.GetEpisodeById(request.EpisodeId);
            if (comicEpisode == null)
            {
                return CommandResult<Guid>.Error("No episode found");
            }
            foreach (var url in request.ImageUrls)
            {
                var imageUrl = await _cloudinaryService.UploadImageAsync(url);
                var episodeDetail = new EpisodeImage(imageUrl, request.EpisodeId);
                comicEpisode.AddEpisodeDetail(episodeDetail);
            }
            return CommandResult<Guid>.Success(comicEpisode.Id);
        }
    }
}
