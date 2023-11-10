using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class UpdateComicCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class UpdateComicCommandHandler : ICommandHandler<UpdateComicCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;

        public UpdateComicCommandHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<CommandResult<Guid>> Handle(UpdateComicCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic == null)
                return CommandResult<Guid>.Error("no comic found");
            comic.UpdateComic(request.Title, request.Description);
            _comicRepository.Update(comic);
            return CommandResult<Guid>.Success(comic.Id);
        }
    }
}
