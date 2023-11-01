using AuthService.Application.ViewModels.Responses;
using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.CQRS.Commands
{
    public class LogoutCommand : ICommand<CommandResult<Guid>>
    {
        public string AccountId { get; set; }
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
            var account = _accountRepository.FirstOrDefault(_ => _.Id == request.AccountId);
            var token = account.GetTokenByAccountId(account.Id);
            if (token is null)
                return CommandResult<Guid>.Error("Invalid user credential");
            token.ModifyBlackFlag(false);
            return CommandResult<Guid>.Success(Guid.Parse(account.Id));
        }
    }
}
