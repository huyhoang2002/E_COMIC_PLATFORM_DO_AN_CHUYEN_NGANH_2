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
    public class GetAuthorsQuery : IQuery<IEnumerable<GetAuthorsResponse>>
    {
        public bool IsDeleted { get; set; }
        public string Keyword { get; set; }
    }

    public class GetAuthorsQueryHandler : IQueryHandler<GetAuthorsQuery, IEnumerable<GetAuthorsResponse>>
    {
        private readonly IAuthorRepository _authorRepository;

        public GetAuthorsQueryHandler(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task<IEnumerable<GetAuthorsResponse>> Handle(GetAuthorsQuery request, CancellationToken cancellationToken)
        {
            var result = _authorRepository
                .GetQuery(_ => _.IsDeleted == request.IsDeleted && (String.IsNullOrEmpty(request.Keyword) || _.Name.Contains(request.Keyword)))
                .Select(_ => new GetAuthorsResponse(_.Id, _.Name, _.DateOfBirth, _.Description, _.AvatarImage, _.Comics));
            return result;
        }
    }
}
