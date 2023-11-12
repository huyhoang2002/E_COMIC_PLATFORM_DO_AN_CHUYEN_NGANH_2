using CloudinaryDotNet.Actions;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Base.Responses
{
    public class PaginationResponse<T>
    {
        public int PageIndex { get; set; } = 0;
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        public int TotalRows { get; set; }
        public List<T> Data { get; set; }

        public PaginationResponse(IEnumerable<T> source, int pageSize, int pageIndex) { 
            Data = source.Skip(pageSize * (pageIndex - 1)).Take(pageSize).ToList();
            PageSize = pageSize;
            PageCount = (int)Math.Ceiling((double)Data.Count / pageSize);
            TotalRows = Data.Count;
            PageIndex = pageIndex;
        }

        public PaginationResponse(IQueryable<T> source, int pageSize, int pageIndex)
        {
            Data = source.Skip(pageSize * (pageIndex - 1)).Take(pageSize).ToList();
            PageSize = pageSize;
            PageCount = (int)Math.Ceiling((double)Data.Count / pageSize);
            TotalRows = Data.Count;
            PageIndex = pageIndex;
        }
    }
}
