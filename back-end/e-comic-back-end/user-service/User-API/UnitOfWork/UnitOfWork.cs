using User_API.Persistence.DbContexts;
using User_API.UnitOfWork.Interfaces;

namespace User_API.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly UserDbContext _userDbContext;

        public UnitOfWork(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        public async Task SaveChangeAsync()
        {
            await _userDbContext.SaveChangesAsync();
        }
    }
}
