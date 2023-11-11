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
    public class GetComicsQuery : IQuery<IEnumerable<GetComicResponse>>
    {
        public bool IsDeleted { get; set; }
    }

    public class GetComicsQueryHandler : IQueryHandler<GetComicsQuery, IEnumerable<GetComicResponse>>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicsQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<IEnumerable<GetComicResponse>> Handle(GetComicsQuery request, CancellationToken cancellationToken)
        {
            var result = _comicRepository.GetQuery(_ => _.IsDeleted == request.IsDeleted);
            return result.Select(_ => new GetComicResponse(_));
        }
    }
}
