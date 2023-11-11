using ComicService.Application.ViewModels.Responses;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class GetComicEpisodeDetailQuery : IQuery<IEnumerable<ComicEpisodeDetailResponse>>
    {
        public Guid ComicId { get; set; }
        public Guid ComicEpisodeId { get; set; }
    }

    public class GetComicEpisodeDetailQueryHandler : IQueryHandler<GetComicEpisodeDetailQuery, IEnumerable<ComicEpisodeDetailResponse>>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicEpisodeDetailQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<IEnumerable<ComicEpisodeDetailResponse>> Handle(GetComicEpisodeDetailQuery request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.ComicId);
            var comicEpisode = comic.GetEpisodeById(request.ComicEpisodeId);
            var comicEpisodeDetail = comicEpisode.GetEpisodeImages(comicEpisode.Id);
            if (comic is null || comicEpisode is null || comicEpisodeDetail is null)
            {
                return null;
            }
            return comicEpisodeDetail.Select(_ => new ComicEpisodeDetailResponse(_));
        }
    }
}
