using EventProcessor.Commons.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events
{
    public class AddComicToFavoriteEvent : IntergrationBaseEvent
    {
        public AddComicToFavoriteEvent(string comicTitle, string comicUrl, Guid userId, string userName)
        {
            ComicTitle = comicTitle;
            ComicUrl = comicUrl;
            UserId = userId;
            UserName = userName;
        }

        public string ComicTitle { get; set; }
        public string ComicUrl { get; set; }
        public Guid UserId { get; set; }
        public string UserName { get; set; }
    }
}
