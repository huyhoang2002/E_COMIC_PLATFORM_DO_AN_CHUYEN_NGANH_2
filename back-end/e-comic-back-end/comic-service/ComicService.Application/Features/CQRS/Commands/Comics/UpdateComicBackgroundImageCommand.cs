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
    public class UpdateComicBackgroundImageCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
    }

    public class UpdateComicBackgroundImageCommandHandler : ICommandHandler<UpdateComicBackgroundImageCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;
        private readonly ICloudinaryService _cloudinaryService;

        public UpdateComicBackgroundImageCommandHandler(IComicRepository comicRepository, ICloudinaryService cloudinaryService)
        {
            _comicRepository = comicRepository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(UpdateComicBackgroundImageCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic == null)
            {
                return CommandResult<Guid>.Error("No comic found");
            }
            var imageUrl = await _cloudinaryService.UploadImageAsync(request.Path);
            comic.UpdateBackgroundImage(imageUrl);
            return CommandResult<Guid>.Success(comic.Id);
        }
    }
}
