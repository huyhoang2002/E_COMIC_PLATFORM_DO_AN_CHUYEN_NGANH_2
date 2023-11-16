using ComicService.Domain.Aggregates.Comics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Responses
{
    public class ComicEpisodeResponse
    {
        public ComicEpisodeResponse() { }

        public ComicEpisodeResponse(Guid id, string episode, Guid comicId)
        {
            Id = id;
            Episode = episode;
            ComicId = comicId;
        }

        public ComicEpisodeResponse(ComicEpisode episode)
        {
            Id = episode.Id;
            Episode = episode.Episode;
            ComicId = episode.ComicId;
            ModifiedAt = episode.ModifiedAt;
        }

        public Guid Id { get; set; }
        public string Episode { get; set; }
        public Guid ComicId { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
