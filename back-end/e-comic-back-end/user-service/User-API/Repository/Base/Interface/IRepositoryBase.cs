using System.Linq.Expressions;

namespace User_API.Repository.Base.Interface
{
    public interface IRepositoryBase<T>
    {
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        IQueryable<T> Find(Expression<Func<T, bool>> predicate);
        T FirstOrDefault(Expression<Func<T, bool>> predicate);
    }
}
