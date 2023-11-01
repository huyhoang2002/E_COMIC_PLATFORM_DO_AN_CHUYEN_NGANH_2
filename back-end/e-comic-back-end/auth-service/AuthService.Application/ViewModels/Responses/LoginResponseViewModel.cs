using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.ViewModels.Responses
{
    public class TokenResponseViewModel
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string TokenType { get; set; }

        public TokenResponseViewModel(string accessToken, string refreshToken)
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
            TokenType = "Bearer";
        }

        public TokenResponseViewModel(string accessToken)
        {
            AccessToken = accessToken;
        }
    }
}
