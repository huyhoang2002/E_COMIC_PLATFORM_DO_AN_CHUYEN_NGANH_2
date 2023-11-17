using ComicService.Domain.Aggregates.Authors;
using ComicService.Domain.Aggregates.Comics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Responses
{
    public class GetComicResponse
    {
        public GetComicResponse(Guid id, string title, string description, string imageUrl, AuthorResponse author, GetCategoriesResponse category, DateTime modifiedAt)
        {
            Id = id;
            Title = title;
            Description = description;
            ImageUrl = imageUrl;
            Author = author;
            Category = category;
            ModifiedAt = modifiedAt;
        }

        public GetComicResponse(Comic comic)
        {
            Id = comic.Id;
            Title = comic.Title;
            Description = comic.Description;
            ImageUrl = comic.ImageUrl;
            WallPaperUrl = comic.WallPaperUrl;
            ModifiedAt = comic.ModifiedAt;
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string WallPaperUrl { get; set; }
        public string ImageUrl { get; set; }
        public AuthorResponse Author { get; set; }
        public GetCategoriesResponse Category { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
