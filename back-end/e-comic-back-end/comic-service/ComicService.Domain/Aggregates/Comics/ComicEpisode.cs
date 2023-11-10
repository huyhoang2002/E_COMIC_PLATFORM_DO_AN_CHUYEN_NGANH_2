using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Aggregates.Comics
{
    public class ComicEpisode : EntityBase<Guid>
    {
        public string Episode { get; private set; }
        public Guid ComicId { get; set; }
        public Comic Comic { get; set; }
        private readonly List<EpisodeImage> _episodeImages = new List<EpisodeImage>();
        public IReadOnlyCollection<EpisodeImage> EpisodeImages => _episodeImages;
        public ComicEpisode()
        {

        }

        public ComicEpisode(string episode, Guid comicId)
        {
            Episode = episode;
            ComicId = comicId;
            IsDeleted = false;
        }
    }
}
