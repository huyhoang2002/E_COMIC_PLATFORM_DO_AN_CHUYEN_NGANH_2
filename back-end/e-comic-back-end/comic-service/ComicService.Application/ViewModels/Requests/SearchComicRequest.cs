using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Requests
{
    public class SearchComicRequest
    {
        public Guid CategoryId { get; set; }
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        public string Keyword { get; set; }
    }
}
