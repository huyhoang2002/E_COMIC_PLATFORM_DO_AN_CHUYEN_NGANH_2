using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Base.Requests
{
    public class PaginationRequest
    {
        public int PageSize { get; set; }
        public int PageCount { get; set; }
    }
}
