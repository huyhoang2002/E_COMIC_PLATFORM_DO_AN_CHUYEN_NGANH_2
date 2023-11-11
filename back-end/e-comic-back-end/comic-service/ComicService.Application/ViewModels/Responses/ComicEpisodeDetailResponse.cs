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
        public Guid Id { get; set; }
        public string ImageUrl { get; set; }
        public DateTime ModifiedAt { get; set; }
        public Guid ComicEpisodeId { get; set; }

        public ComicEpisodeDetailResponse(EpisodeImage episodeImage)
        {
            Id = episodeImage.Id;
            ImageUrl = episodeImage.ImageUrl;
            ModifiedAt = episodeImage.ModifiedAt;
            ComicEpisodeId = episodeImage.ComicEpisodeId;
        }
    }
}
