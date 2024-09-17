using AuthService.Application.Helpers;
using AuthService.Application.ViewModels.Responses;
using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.CQRS.Commands
{
    public class LogoutCommand : ICommand<CommandResult<Guid>>
    {
        public HttpContext HttpContext { get; set; }
    }

    public class LogoutCommandHandler : ICommandHandler<LogoutCommand, CommandResult<Guid>>
    {
        private readonly IAccountRepository _accountRepository;

        public LogoutCommandHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<CommandResult<Guid>> Handle(LogoutCommand request, CancellationToken cancellationToken)
        {
            var accountId = getAccountIdFromToken(request.HttpContext);
            var account = _accountRepository.FirstOrDefault(_ => _.Id == accountId);
            var token = account.GetTokenByAccountId(account.Id);
            if (token is null)
                return CommandResult<Guid>.Error("Invalid user credential");
            token.ModifyBlackFlag(false);
            return CommandResult<Guid>.Success(Guid.Parse(account.Id));
        }

        private string getAccountIdFromToken(HttpContext httpContext)
        {
            var token = DecodeTokenHelper.DecodeToken(httpContext);
            var accountId = token.Claims.FirstOrDefault(_ => _.Type == "nameid").Value;
            return accountId;
        }
    }
}
