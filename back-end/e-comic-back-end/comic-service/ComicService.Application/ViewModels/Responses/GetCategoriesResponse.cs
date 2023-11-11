using ComicService.Domain.Aggregates.Categories;
using ComicService.Domain.Aggregates.Comics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Responses
{
    public class GetCategoriesResponse
    {
        public Guid Id { get; set; }
        public string CategoryName { get; set; }
        public DateTime ModifiedAt { get; set; }

        public GetCategoriesResponse(Category category)
        {
            Id = category.Id;
            CategoryName = category.CategoryName;
            ModifiedAt = category.ModifiedAt;
        }
    }
}
