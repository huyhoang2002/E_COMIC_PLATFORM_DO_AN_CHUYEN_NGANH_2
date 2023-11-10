using AuthService.Infrastructure.Persistence.DbContext;
using AuthService.Infrastructure.UnitOfWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.UnitOfWork
{
    public class UnitOfwork : IUnitOfwork
    {
        private readonly AuthDbContext _authDbContext;
        public UnitOfwork(AuthDbContext authDbContext)
        {
            _authDbContext = authDbContext;
        }
        public async Task<T> SaveChangeAsync<T>(Func<Task<T>> action)
        {
            var result = await action();
            await _authDbContext.SaveChangesAsync();
            return result;
        }
    }
}
