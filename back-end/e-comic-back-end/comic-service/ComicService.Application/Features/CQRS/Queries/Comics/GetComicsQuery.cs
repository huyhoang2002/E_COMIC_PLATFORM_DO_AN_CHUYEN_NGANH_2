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
    public class GetComicsQuery : IQuery<PaginationResponse<GetComicResponse>>
    {
        public bool IsDeleted { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public string Keyword { get; set; }
    }

    public class GetComicsQueryHandler : IQueryHandler<GetComicsQuery, PaginationResponse<GetComicResponse>>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicsQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<PaginationResponse<GetComicResponse>> Handle(GetComicsQuery request, CancellationToken cancellationToken)
        {
            var result = _comicRepository.GetQuery(_ => _.IsDeleted == request.IsDeleted && (String.IsNullOrEmpty(request.Keyword) || _.Title.Contains(request.Keyword))).OrderByDescending(_ => _.ModifiedAt);
            return new PaginationResponse<GetComicResponse>(result.Select(_ => new GetComicResponse(_)), request.PageSize, request.PageIndex);
        }
    }
}
