using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Aggregates.Comic
{
    public class Comic : EntityBase<Guid>
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public string ImageUrl { get; private set; }

        public Guid AuthorId { get; set; }
        public Author Author { get; set; }
        private readonly List<ComicEpisode> _comicEpisodes = new List<ComicEpisode>();
        public IReadOnlyCollection<ComicEpisode> ComicEpisodes => _comicEpisodes;

        public Comic(string title, string description, string imageUrl, Guid authorId)
        {
            Title = title;
            Description = description;
            ImageUrl = imageUrl;
            AuthorId = authorId;
        }
    }
}
