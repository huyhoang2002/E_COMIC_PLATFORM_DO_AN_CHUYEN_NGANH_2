using Favorite.Data.Persistences.DbContexts;
using Favorite.Data.UnitOfWorks.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        protected FavoriteDbContext DbContext;
        public async Task<int> SaveChangesAsync()
        {
            var result = await DbContext.SaveChangesAsync();
            return result;
        }
    }
}
