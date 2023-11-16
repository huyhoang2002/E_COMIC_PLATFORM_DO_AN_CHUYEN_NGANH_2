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
    public class MoveBackPreviousEpisodeQuery : IQuery<ComicEpisodeDetailResponse>
    {
        public Guid ComicId { get; set; }
        public int Index { get; set; }
    }

    public class MoveBackPreviousEpisodeQueryQueryHandler : IQueryHandler<MoveBackPreviousEpisodeQuery, ComicEpisodeDetailResponse>
    {
        private readonly IComicRepository _repository;

        public MoveBackPreviousEpisodeQueryQueryHandler(IComicRepository repository)
        {
            _repository = repository;
        }

        public Task<ComicEpisodeDetailResponse> Handle(MoveBackPreviousEpisodeQuery request, CancellationToken cancellationToken)
        {
            var comic = _repository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic is null)
                return Task.FromResult(new ComicEpisodeDetailResponse());
            var nextEpisode = comic.MoveBackPreviousEpisode(request.Index);
            return Task.FromResult(new ComicEpisodeDetailResponse(nextEpisode));
        }
    }
}
