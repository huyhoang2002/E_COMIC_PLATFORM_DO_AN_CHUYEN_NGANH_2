using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Requests
{
    public class GetComicRequest
    {
        public bool IsDeleted { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public string Keyword { get; set; }
    }
}
