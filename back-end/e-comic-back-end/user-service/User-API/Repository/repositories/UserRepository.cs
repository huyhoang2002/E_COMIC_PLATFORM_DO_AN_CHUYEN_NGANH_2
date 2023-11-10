using User_API.Entities;
using User_API.Persistence.DbContexts;
using User_API.Repository.Base;
using User_API.Repository.repositories.Interfaces;

namespace User_API.Repository.repositories
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(UserDbContext dbContext) : base(dbContext)
        {

        }
    }
}
