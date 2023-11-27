using Favorite.Business.Entities.Favorites;
using Favorite.Data.Bases.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.Repositories.Interfaces
{
    public interface IFavoriteRepository : IRepositoryBase<FavoriteEntity>
    {
    }
}
