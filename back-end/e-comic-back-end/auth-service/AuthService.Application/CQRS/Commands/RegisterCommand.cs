using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.CQRS.Command;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.CQRS.Commands
{
    public class RegisterCommand : ICommand<CommandResult<Guid>>
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }

    public class RegisterCommandHandler : ICommandHandler<RegisterCommand, CommandResult<Guid>>
    {
        private readonly UserManager<Account> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public RegisterCommandHandler(UserManager<Account> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<CommandResult<Guid>> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var account = new Account(request.UserName, request.Email);
            var result = await _userManager.CreateAsync(account, request.Password);
            if (result.Succeeded is false)
                return CommandResult<Guid>.Error("Failed to create account");
            await createRoleIfRoleDoesNotExist(request.Role, account);
            return CommandResult<Guid>.Success(Guid.Parse(account.Id));
        }

        private async Task createRoleIfRoleDoesNotExist(string roleName, Account account)
        {
            var isRoleExist = await _roleManager.RoleExistsAsync(roleName);
            if (!isRoleExist)
            {
                var identityRole = new IdentityRole(roleName);
                await _roleManager.CreateAsync(identityRole);
            }
            await _userManager.AddToRoleAsync(account, roleName);
        }
    }
}
