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
        public GetCategoriesResponse(Guid id, string categoryName, DateTime modifiedTime, IEnumerable<Comic> comics)
        {
            Id = id;
            CategoryName = categoryName;
            ModifiedTime = modifiedTime;
            Comics = comics;
        }

        public Guid Id { get; set; }
        public string CategoryName { get; set; }
        public DateTime ModifiedTime { get; set; }
        public IEnumerable<Comic> Comics { get; set; }
    }
}
