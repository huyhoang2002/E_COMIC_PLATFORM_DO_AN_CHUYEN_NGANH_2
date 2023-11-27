using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.DTOs.Responses
{
    public class GetFavoriteComicResponse
    {
        public Guid Id { get; set; }
        public string ComicTitle { get; set; }
        public string ComicUrl { get; set; }
        public Guid UserId { get; set; }
        public string UserName { get; set; }
    }
}
