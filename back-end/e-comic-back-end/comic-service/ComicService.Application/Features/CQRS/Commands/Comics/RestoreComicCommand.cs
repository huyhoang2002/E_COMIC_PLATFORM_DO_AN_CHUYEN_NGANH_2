using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class RestoreComicCommand : ICommand<CommandResult<Guid>>
    {
        public Guid ComicId { get; set; }
    }

    public class RestoreComicCommandHandler : ICommandHandler<RestoreComicCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;

        public RestoreComicCommandHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public Task<CommandResult<Guid>> Handle(RestoreComicCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic is null)
                return Task.FromResult(CommandResult<Guid>.Error("Comic is not found"));
            comic.RestoreComic();
            _comicRepository.Update(comic);
            return Task.FromResult(CommandResult<Guid>.Success(comic.Id));
        }
    }
}
