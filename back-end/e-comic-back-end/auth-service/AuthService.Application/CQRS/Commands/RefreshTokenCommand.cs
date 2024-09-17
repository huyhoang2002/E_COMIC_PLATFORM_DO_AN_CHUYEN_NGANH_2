using AuthService.Application.ViewModels.Responses;
using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.Persistence.Repositories;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Application.CQRS.Commands
{
    public class RefreshTokenCommand : ICommand<CommandResult<LoginResponseViewModel>>
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string AccountId { get; set; }
    }

    public class RefreshTokenCommandHandler : ICommandHandler<RefreshTokenCommand, CommandResult<LoginResponseViewModel>>
    {
        private readonly IConfiguration _configuration;
        private readonly IAccountRepository _accountRepository;
        public RefreshTokenCommandHandler(IConfiguration configuration, IAccountRepository accountRepository)
        {
            _configuration = configuration;
            _accountRepository = accountRepository;
        }
        public async Task<CommandResult<LoginResponseViewModel>> Handle(RefreshTokenCommand request, CancellationToken cancellationToken)
        {
            var principal = getClaimsPrincipal(request.AccessToken);
            if (principal == null)
                return CommandResult<LoginResponseViewModel>.Error("Invalid user credential");
            var account = _accountRepository.FirstOrDefault(_ => _.Id == request.AccountId);
            if (account.ValidateRefreshToken(request.RefreshToken))
            {
                account.ModifyBlackFlag(account.Id);
                var newAccessToken = generateAccessToken(principal.Claims.ToList());
                var newRefreshToken = generateRefreshToken();
                account.SaveToken(newAccessToken, newRefreshToken, account.Id);
                return CommandResult<LoginResponseViewModel>.Success(new LoginResponseViewModel(newAccessToken, newRefreshToken));
            }
            return CommandResult<LoginResponseViewModel>.Error("failed to verify user credential");
        }

        private string generateAccessToken(List<Claim> claims)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["JWT:Issuer"],
                _configuration["JWT:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: signingCredentials
            );
            var result = new JwtSecurityTokenHandler().WriteToken(token);
            return result;
        }

        private string generateRefreshToken()
        {
            var randomNumber = new byte[64];
            var generator = RandomNumberGenerator.Create();
            generator.GetBytes(randomNumber);
            var token = Convert.ToBase64String(randomNumber);
            return token;
        }


        private ClaimsPrincipal getClaimsPrincipal(string token)
        {
            var tokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = _configuration["JWT:Issuer"],
                ValidAudience = _configuration["JWT:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]!)),
                RequireExpirationTime = true,
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
            if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenException("Invalid token");
            return principal;
        }
    }
}
