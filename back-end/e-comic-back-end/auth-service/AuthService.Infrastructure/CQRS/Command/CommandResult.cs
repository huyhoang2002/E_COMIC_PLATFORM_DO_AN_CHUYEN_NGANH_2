using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.CQRS.Command
{
    public class CommandResult
    {
        public bool IsSuccess { get; set; }

        public CommandResult(bool isSuccess)
        {
            IsSuccess = isSuccess;
        }

        public static CommandResult Success()
        {
            return new CommandResult(true);
        }

        public static CommandResult Error()
        {
            return new CommandResult(false);
        }
    }

    public class CommandResult<TResponse> : CommandResult
    {
        public TResponse Message { get; set; }
        public CommandResult(bool isSuccess, TResponse message) : base(isSuccess)
        {
            Message = message;
        }

        public static CommandResult<TResponse> Success(TResponse message)
        {
            return new CommandResult<TResponse>(true, message);
        }

        public static CommandResult<TResponse> Error(TResponse message)
        {
            return new CommandResult<TResponse>(false, message);
        }
    }
}
