using ComicService.Domain.Aggregates.Comics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Responses
{
    public class ComicEpisodeDetailResponse
    {
        public ComicEpisodeDetailResponse(Guid id, string episode, Guid comicId)
        {
            Id = id;
            Episode = episode;
            ComicId = comicId;
        }

        public ComicEpisodeDetailResponse(ComicEpisode episode)
        {
            Id = episode.Id;
            Episode = episode.Episode;
            ComicId = episode.ComicId;
            ModifiedAt = episode.ModifiedAt;
            EpisodeDetail = episode.EpisodeImages.Select(_ => new EpisodeDetailResponse(_)).ToList();
        }

        public Guid Id { get; set; }
        public string Episode { get; set; }
        public Guid ComicId { get; set; }
        public DateTime ModifiedAt { get; set; }
        public List<EpisodeDetailResponse> EpisodeDetail { get; set; }
    }
}
