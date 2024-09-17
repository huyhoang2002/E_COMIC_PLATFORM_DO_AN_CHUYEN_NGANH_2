using ComicService.Application.ViewModels.Responses;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class GetComicEpisodeQuery : IQuery<IEnumerable<ComicEpisodeResponse>>
    {
        public Guid ComicId { get; set; }
    }

    public class GetComicEpisodeQueryHandler : IQueryHandler<GetComicEpisodeQuery, IEnumerable<ComicEpisodeResponse>>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicEpisodeQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<IEnumerable<ComicEpisodeResponse>> Handle(GetComicEpisodeQuery request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic == null)
            {
                return null;
            }
            var comicEpisode = comic.GetEpisodesById(request.ComicId);
            if (comicEpisode == null)
            {
                return null;
            }
            return comicEpisode.Select(_ => new ComicEpisodeResponse(_)).OrderBy(_ => _.ModifiedAt);
        }
    }
}
