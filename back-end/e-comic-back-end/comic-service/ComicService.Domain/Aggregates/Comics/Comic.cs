using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ComicService.Domain.Aggregates;
using ComicService.Domain.Aggregates.Categories;
using ComicService.Domain.Aggregates.Authors;

namespace ComicService.Domain.Aggregates.Comics
{
    public class Comic : EntityBase<Guid>
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public string ImageUrl { get; private set; }

        public Guid AuthorId { get; set; }
        public Author Author { get; set; }
        
        public Guid CategoryId { get; set; }
        public Category Category { get; set; } 

        private readonly List<ComicEpisode> _comicEpisodes = new List<ComicEpisode>();
        public IReadOnlyCollection<ComicEpisode> ComicEpisodes => _comicEpisodes;

        public Comic(string title, string description, string imageUrl, Guid authorId, Guid categoryId)
        {
            Title = title;
            Description = description;
            ImageUrl = imageUrl;
            AuthorId = authorId;
            CategoryId = categoryId;
            IsDeleted = false;
        }

        public void UpdateComic(string title, string description)
        {
            Title = title;
            Description = description;
            ModifiedAt = DateTime.Now;
        }

        public void UpdateBackgroundImage(string imageUrl)
        {
            ImageUrl = imageUrl;
            ModifiedAt = DateTime.Now;
        }

        public void SoftDelete()
        {
            IsDeleted = true;
            ModifiedAt = DateTime.Now;
        }

        public void AddEpisode(ComicEpisode comicEpisode)
        {
            _comicEpisodes.Add(comicEpisode);
        }

        public IEnumerable<ComicEpisode> GetEpisodesById(Guid comicId)
        {
            return _comicEpisodes.Where(_ => _.ComicId == comicId);
        }

        public ComicEpisode GetEpisodeById(Guid id)
        {
            return _comicEpisodes.FirstOrDefault(_ => _.Id == id);
        }

        public ComicEpisode GetEpisodeByComicId(Guid comicId)
        {
            return _comicEpisodes.FirstOrDefault(_ => _.ComicId == comicId);
        }

        public ComicEpisode GetEpisodeByIndex(int index)
        {
            if (index > _comicEpisodes.Count - 1)
                return new ComicEpisode();
            return _comicEpisodes[index];
        }

        public void RestoreComic()
        {
            IsDeleted = false;
        }

        public ComicEpisode MoveToNextEpisode(int index)
        {
            if (index + 1 > _comicEpisodes.Count)
            {
                return new ComicEpisode();
            }
            var nextEpisode = _comicEpisodes[(index - 1) + 1];
            return nextEpisode;
        }

        public ComicEpisode MoveBackPreviousEpisode(int index)
        {
            if (index + 1 <= 0 || index + 1 > _comicEpisodes.Count)
            {
                return new ComicEpisode();
            }
            var nextEpisode = _comicEpisodes[(index + 1) - 1];
            return nextEpisode;
        }
    }
}
