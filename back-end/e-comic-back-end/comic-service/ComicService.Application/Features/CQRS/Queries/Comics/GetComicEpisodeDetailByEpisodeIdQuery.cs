using ComicService.Application.ViewModels.Responses;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class GetComicEpisodeDetailByEpisodeIdQuery : IQuery<ComicEpisodeDetailResponse>
    {
        public Guid ComicId { get; set; }
        public Guid EpisodeId { get; set; }
    }

    public class GetComicEpisodeDetailByEpisodeIdQueryHandler : IQueryHandler<GetComicEpisodeDetailByEpisodeIdQuery, ComicEpisodeDetailResponse>
    {
        private readonly IComicRepository _repository;

        public GetComicEpisodeDetailByEpisodeIdQueryHandler(IComicRepository repository)
        {
            _repository = repository;
        }

        public Task<ComicEpisodeDetailResponse> Handle(GetComicEpisodeDetailByEpisodeIdQuery request, CancellationToken cancellationToken)
        {
            var comic = _repository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic is null)
            {
                return null;
            }
            var comicEpisode = comic.GetEpisodeById(request.EpisodeId);
            if (comicEpisode is null)
            {
                return null;
            }
            return Task.FromResult(new ComicEpisodeDetailResponse(comicEpisode));
        }
    }
}
