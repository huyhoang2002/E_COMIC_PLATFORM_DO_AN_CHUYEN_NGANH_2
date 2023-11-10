using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Requests
{
    public class UpdateComicRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
