using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Aggregates.Comics
{
    public class EpisodeImage : EntityBase<Guid>
    {
        public string ImageUrl { get; private set; }

        public Guid ComicEpisodeId { get; set; }
        public ComicEpisode ComicEpisode { get; set; }

        public EpisodeImage(string imageUrl, Guid comicEpisodeId)
        {
            ImageUrl = imageUrl;
            ComicEpisodeId = comicEpisodeId;
        }
    }
}
