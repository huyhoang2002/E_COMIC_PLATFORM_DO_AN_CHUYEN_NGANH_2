using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.DTOs.Requests
{
    public class AddComicToFavoriteRequest
    {
        public AddComicToFavoriteRequest(string comicTitle, string comicUrl, Guid comicId, Guid userId, string userName)
        {
            ComicTitle = comicTitle;
            ComicUrl = comicUrl;
            ComicId = comicId;
            UserId = userId;
            UserName = userName;
        }

        public string ComicTitle { get; set; }
        public string ComicUrl { get; set; }
        public Guid ComicId { get; set; }
        public Guid UserId { get; set; }
        public string UserName { get; set; }
    }
}
