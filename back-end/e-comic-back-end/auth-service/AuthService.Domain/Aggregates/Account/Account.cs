using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace AuthService.Domain.Aggregates.Account
{
    public class Account : IdentityUser
    {
        public User User { get; set; }

        public Account()
        {

        }

        public Account(string userName, string email)
        {
            UserName = userName;
            Email = email;
        }
    }
}
