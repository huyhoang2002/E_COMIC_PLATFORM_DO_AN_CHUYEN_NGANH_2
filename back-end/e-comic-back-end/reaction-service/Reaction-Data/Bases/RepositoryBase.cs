using Microsoft.EntityFrameworkCore;
using Reaction_Data.Bases.Interfaces;
using Reaction_Data.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.Bases
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected ReactionDbContext DbContext;
        protected DbSet<T> DbSet;
        public RepositoryBase(ReactionDbContext dbContext)
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

        public virtual IQueryable<T> GetQuery(Expression<Func<T, bool>> predicate)
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
