using ComicService.Infrastructure.UnitOfWork.Interfaces;
using ComicService.Persistence.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.UnitOfWork
{
    public class UnitOfwork : IUnitOfwork
    {
        private readonly ComicDbContext _comicDbContext;
        public UnitOfwork(ComicDbContext comicDbContext)
        {
            _comicDbContext = comicDbContext;
        }
        public async Task<T> SaveChangeAsync<T>(Func<Task<T>> action)
        {
            var result = await action();
            await _comicDbContext.SaveChangesAsync();
            return result;
        }
    }
}
