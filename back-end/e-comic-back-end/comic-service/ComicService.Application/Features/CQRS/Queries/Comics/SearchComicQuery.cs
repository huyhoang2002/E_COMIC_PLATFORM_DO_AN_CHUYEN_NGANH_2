using ComicService.Application.ViewModels.Base.Responses;
using ComicService.Application.ViewModels.Responses;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class SearchComicQuery : IQuery<PaginationResponse<GetComicResponse>>
    {
        public Guid CategoryId { get; set; }
        public string Keyword { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
    }

    public class SearchComicQueryHandler : IQueryHandler<SearchComicQuery, PaginationResponse<GetComicResponse>>
    {
        private readonly IComicRepository _repository;

        public SearchComicQueryHandler(IComicRepository repository)
        {
            _repository = repository;
        }

        public Task<PaginationResponse<GetComicResponse>> Handle(SearchComicQuery request, CancellationToken cancellationToken)
        {
            var comic = _repository
                .GetQuery(request.CategoryId.Equals(Guid.Empty) ? null : _ => !request.CategoryId.Equals(Guid.Empty) && _.CategoryId == request.CategoryId)
                .Where(_ => _.Title.Contains(request.Keyword));
            var getComicResponses = comic.Select(_ => new GetComicResponse(_));
            return Task.FromResult(new PaginationResponse<GetComicResponse>(getComicResponses, request.PageSize, request.PageIndex));
        }
    }
}
