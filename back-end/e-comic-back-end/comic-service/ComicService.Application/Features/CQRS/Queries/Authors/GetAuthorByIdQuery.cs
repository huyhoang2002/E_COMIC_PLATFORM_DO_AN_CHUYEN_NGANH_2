using ComicService.Application.ViewModels.Responses;
using ComicService.Domain.Aggregates.Authors;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Authors
{
    public class GetAuthorByIdQuery : IQuery<GetAuthorsResponse>
    {
        public Guid Id { get; set; }
    }

    public class GetAuthorByIdQueryHandler : IQueryHandler<GetAuthorByIdQuery, GetAuthorsResponse>
    {
        private readonly IAuthorRepository _authorRepository;

        public GetAuthorByIdQueryHandler(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task<GetAuthorsResponse> Handle(GetAuthorByIdQuery request, CancellationToken cancellationToken)
        {
            var author = _authorRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (author is null)
            {
                return null;
            }
            return new GetAuthorsResponse(author.Id, author.Name, author.DateOfBirth, author.Description, author.AvatarImage, author.Comics);
        }
    }
}
