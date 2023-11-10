using AuthService.Infrastructure.CQRS.Query;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.CQRS.Queries
{
    public class GetAccountIdQuery : IQuery<string>
    {
        public string AccessToken { get; set; }
    }

    public class GetAccountHandler : IQueryHandler<GetAccountIdQuery, string>
    {
        public async Task<string> Handle(GetAccountIdQuery request, CancellationToken cancellationToken)
        {
            var handler = new JwtSecurityTokenHandler();
            var tokenDecoded = handler.ReadJwtToken(request.AccessToken) as JwtSecurityToken;
            var accountId = tokenDecoded.Claims.FirstOrDefault(_ => _.Type == "nameid").Value;
            return accountId;
        }
    }
}
