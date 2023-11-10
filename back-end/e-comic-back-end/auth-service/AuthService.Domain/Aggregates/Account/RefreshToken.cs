using AuthService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Domain.Aggregates.Account
{
    public class Token : EntityBase
    {
        public string AccessToken { get; private set; }
        public string RefreshToken { get; private set; }
        public bool BlackFlag { get; private set; }

        public string AccountId { get; set; }
        public Account Account { get; set; }

        public Token(string accessToken, string refreshToken, string accountId)
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
            BlackFlag = true;
            AccountId = accountId;
        }

        public void ModifyBlackFlag(bool flagStatus)
        {
            BlackFlag = flagStatus;
        }
    }
}
