using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class CreateComicEpisodeCommand : ICommand<CommandResult<Guid>>
    {
        public string Episode { get; set; }
        public Guid ComicId { get; set; }
    }

    public class CreateComicEpisodeCommandHandler : ICommandHandler<CreateComicEpisodeCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;

        public CreateComicEpisodeCommandHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<CommandResult<Guid>> Handle(CreateComicEpisodeCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic == null)
            {
                return CommandResult<Guid>.Error("Comic is not found");
            }
            if (request.Episode is null || comic.Id.Equals(Guid.Empty))
            {
                return CommandResult<Guid>.Error("Some inputs are blanked");
            }
            var comicEpisode = new ComicEpisode(request.Episode, comic.Id);
            comic.AddEpisode(comicEpisode);
            return CommandResult<Guid>.Success(comicEpisode.Id);
        }
    }
}
