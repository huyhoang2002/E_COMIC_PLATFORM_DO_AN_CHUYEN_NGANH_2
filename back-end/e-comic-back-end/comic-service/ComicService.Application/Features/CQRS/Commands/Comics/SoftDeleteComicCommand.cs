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
    public class SoftDeleteComicCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
    }


    public class SoftDeleteComicCommandHandler : ICommandHandler<SoftDeleteComicCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;

        public SoftDeleteComicCommandHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<CommandResult<Guid>> Handle(SoftDeleteComicCommand request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic is null)
            {
                return CommandResult<Guid>.Error("No comic found");
            }
            comic.SoftDelete();
            _comicRepository.Update(comic);
            return CommandResult<Guid>.Success(comic.Id);
        }
    }
}
