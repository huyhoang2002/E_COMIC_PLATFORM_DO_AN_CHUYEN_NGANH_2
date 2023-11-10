using System.IdentityModel.Tokens.Jwt;

namespace User_API.Helpers
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
    }
}
