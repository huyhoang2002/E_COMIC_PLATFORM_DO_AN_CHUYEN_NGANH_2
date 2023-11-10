using ComicService.Infrastructure.Base.Interfaces;
using ComicService.Persistence.DbContexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.Base
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected ComicDbContext DbContext;
        protected DbSet<T> DbSet;
        public RepositoryBase(ComicDbContext dbContext)
        {
            DbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            DbSet = DbContext.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await DbSet.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            DbSet.Remove(entity);
        }

        public virtual T FirstOrDefault(Expression<Func<T, bool>> predicate)
        {
            return DbSet.FirstOrDefault(predicate);
        }

        public IQueryable<T> GetQuery(Expression<Func<T, bool>> predicate)
        {
            if (predicate is null)
            {
                return DbSet.AsNoTracking();
            }
            return DbSet.Where(predicate); 
        }

        public void Update(T entity)
        {
            DbSet.Update(entity);
        }
    }
}
