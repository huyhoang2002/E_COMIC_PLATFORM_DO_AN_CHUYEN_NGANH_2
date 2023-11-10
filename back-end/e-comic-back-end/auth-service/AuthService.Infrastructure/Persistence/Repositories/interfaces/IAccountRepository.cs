using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.Persistence.Repositories.interfaces
{
    public interface IAccountRepository : IRepositoryBase<Account>
    {
    }
}
