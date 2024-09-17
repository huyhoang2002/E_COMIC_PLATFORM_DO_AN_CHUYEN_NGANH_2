using Favorite.Business.Entities.Favorites;
using Favorite.Data.Bases;
using Favorite.Data.Persistences.DbContexts;
using Favorite.Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.Repositories
{
    public class FavoriteRepository : RepositoryBase<FavoriteEntity>, IFavoriteRepository
    {
        public FavoriteRepository(FavoriteDbContext dbContext) : base(dbContext)
        {
        }
    }
}
