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
        private readonly List<Token> _tokens = new List<Token>();
        public IReadOnlyCollection<Token> Tokens => _tokens;


        public Account()
        {

        }

        public Account(string email)
        {
            Email = email;
        }

        public Account(string userName, string email)
        {
            UserName = userName;
            Email = email;
        }

        public void SaveToken(string accessToken, string refreshToken, string accountId)
        {
            var token = new Token(accessToken, refreshToken, accountId);
            _tokens.Add(token);
        }

        public IEnumerable<Token> GetToken(string accountId)
        {
            return _tokens.Where(_ => _.AccountId == accountId).ToList();
        }

        public void ModifyBlackFlag(string accountId)
        {
            var tokens = GetToken(accountId);
            foreach (var token in tokens)
            {
                token.ModifyBlackFlag(false);
            }
        }

        public bool ValidateRefreshToken(string refreshToken)
        {
            var result = _tokens.FirstOrDefault(_ => _.RefreshToken == refreshToken);
            if (result.BlackFlag == false)
            {
                return false;
            }
            return result is not null;
        }

        public Token GetTokenByAccountId(string accountId)
        {
            var result = _tokens.FirstOrDefault(_ => _.AccountId == accountId && _.BlackFlag == true);
            return result;
        }
    }
}
