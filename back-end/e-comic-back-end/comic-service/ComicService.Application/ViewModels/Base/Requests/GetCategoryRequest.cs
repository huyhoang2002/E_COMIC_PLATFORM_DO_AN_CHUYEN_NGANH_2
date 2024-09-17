using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Base.Requests
{
    public class GetCategoryRequest
    {
        public bool IsDeleted { get; set; }
        public string Keyword { get; set; }
    }
}
