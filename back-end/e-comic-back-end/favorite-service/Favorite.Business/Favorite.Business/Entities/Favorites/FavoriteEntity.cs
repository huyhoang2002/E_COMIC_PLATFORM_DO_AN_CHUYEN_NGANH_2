using Favorite.Business.SeedWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Business.Entities.Favorites
{
    public class FavoriteEntity : EntityBase<Guid>
    {
        public string ComicTitle { get; private set; }
        public string ComicUrl { get; private set; }
        public Guid ComicId { get; private set; }
        public Guid UserId { get; private set; }
        public string UserName { get; private set; }

        public FavoriteEntity(string comicTitle, string comicUrl, Guid comicId, Guid userId, string userName)
        {
            ComicTitle = comicTitle;
            ComicUrl = comicUrl;
            ComicId = comicId;
            UserId = userId;
            UserName = userName;
            ModifiedDate = DateTime.Now;
        }
    }
}
