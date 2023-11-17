using ComicService.Application.ViewModels.Responses;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class MoveNextEpisodeQuery : IQuery<ComicEpisodeDetailResponse>
    {
        public Guid ComicId { get; set; }
        public int Index { get; set; }
    }

    public class MoveNextEpisodeQueryHandler : IQueryHandler<MoveNextEpisodeQuery, ComicEpisodeDetailResponse>
    {
        private readonly IComicRepository _repository;

        public MoveNextEpisodeQueryHandler(IComicRepository repository)
        {
            _repository = repository;
        }

        public Task<ComicEpisodeDetailResponse> Handle(MoveNextEpisodeQuery request, CancellationToken cancellationToken)
        {
            var comic = _repository.FirstOrDefault(_ => _.Id == request.ComicId);
            if (comic is null) 
                return Task.FromResult(new ComicEpisodeDetailResponse());
            var nextEpisode = comic.MoveToNextEpisode(request.Index);
            return Task.FromResult(new ComicEpisodeDetailResponse(nextEpisode));
        }
    }
}
