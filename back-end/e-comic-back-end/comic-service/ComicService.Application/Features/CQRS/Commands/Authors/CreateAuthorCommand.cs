using ComicService.Domain.Aggregates.Authors;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Authors
{
    public class CreateAuthorCommand : ICommand<CommandResult<Guid>>
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Description { get; set; }
        //public string AvatarImage { get; private set; }
    }

    public class CreateAuthorCommandHandler : ICommandHandler<CreateAuthorCommand, CommandResult<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;

        public CreateAuthorCommandHandler(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task<CommandResult<Guid>> Handle(CreateAuthorCommand request, CancellationToken cancellationToken)
        {
            var author = new Author(request.Name, request.DateOfBirth, request.Description);
            if (request.Name is null && request.DateOfBirth.ToString() is null && request.Description is null)
            {
                return CommandResult<Guid>.Error("Some of fields are null");
            }
            await _authorRepository.AddAsync(author);
            return CommandResult<Guid>.Success(author.Id);
        }
    }
} 
