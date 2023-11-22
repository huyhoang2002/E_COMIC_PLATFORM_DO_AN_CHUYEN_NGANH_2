using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.ViewModels.Responses
{
    public class LoginResponseViewModel
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string TokenType { get; set; }
        public string Role { get; set; }

        public LoginResponseViewModel(string accessToken, string refreshToken, string role)
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
            TokenType = "Bearer";
            Role = role;
        }

        public LoginResponseViewModel(string accessToken, string refreshToken)
        {
            AccessToken = accessToken;
            RefreshToken = refreshToken;
            TokenType = "Bearer";
        }

        public LoginResponseViewModel(string accessToken)
        {
            AccessToken = accessToken;
        }
    }
}
