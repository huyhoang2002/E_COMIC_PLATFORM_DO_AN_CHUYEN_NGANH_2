using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using User_API.Persistence.DbContexts;
using User_API.Repository.Base.Interface;

namespace User_API.Repository.Base
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected UserDbContext DbContext;
        protected DbSet<T> DbSet;
        public RepositoryBase(UserDbContext dbContext)
        {
            DbContext = dbContext ?? throw new ArgumentNullException(nameof(DbContext));
            DbSet = dbContext.Set<T>();
        }
        public async Task AddAsync(T entity)
        {
            await DbSet.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            DbSet.Remove(entity);
        }

        public IQueryable<T> Find(Expression<Func<T, bool>> predicate)
        {
            if (predicate is null)
            {
                return DbSet.AsNoTracking();
            }
            return DbSet.Where(predicate);
        }

        public T FirstOrDefault(Expression<Func<T, bool>> predicate)
        {
            return DbSet.FirstOrDefault(predicate);
        }

        public void Update(T entity)
        {
            DbSet.Update(entity);
        }
    }
}
