using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.Base;
using AuthService.Infrastructure.Persistence.DbContext;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.Persistence.Repositories
{
    public class AccountRepository : RepositoryBase<Account>, IAccountRepository
    {
        public AccountRepository(AuthDbContext dbContext) : base(dbContext)
        {
            
        }

        public override Account FirstOrDefault(Expression<Func<Account, bool>> predicate)
        {
            return this.DbSet.Include(_ => _.Tokens).FirstOrDefault(predicate);
        }
    }
}
