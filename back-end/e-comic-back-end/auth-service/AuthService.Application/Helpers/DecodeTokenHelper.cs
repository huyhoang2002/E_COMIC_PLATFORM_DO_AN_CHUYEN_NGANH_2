using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.Helpers
{
    public static class DecodeTokenHelper
    {
        public static JwtSecurityToken DecodeToken(HttpContext context)
        {
            var accessToken = context.Request.Headers.Authorization.ToString().Split(" ")[1];
            var handler = new JwtSecurityTokenHandler();
            var tokenDecoded = handler.ReadJwtToken(accessToken) as JwtSecurityToken;
            return tokenDecoded;
        }

        public static JwtSecurityToken DecodeToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var tokenDecoded = handler.ReadJwtToken(token) as JwtSecurityToken;
            return tokenDecoded;
        }
    }
}
