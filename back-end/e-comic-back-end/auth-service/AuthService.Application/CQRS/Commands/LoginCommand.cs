using AuthService.Application.ViewModels.Responses;
using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using Microsoft.AspNetCore.Identity;
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
    public class LoginCommand : ICommand<CommandResult<TokenResponseViewModel>>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class LoginCommandHandler : ICommandHandler<LoginCommand, CommandResult<TokenResponseViewModel>>
    {
        private readonly IConfiguration _configuration;
        private readonly SignInManager<Account> _signInManager;
        private readonly IAccountRepository _accountRepository;
        private readonly UserManager<Account> _userManager;
    
        public LoginCommandHandler(IConfiguration configuration, SignInManager<Account> signInManager, IAccountRepository accountRepository, UserManager<Account> userManager)
        {
            _configuration = configuration;
            _signInManager = signInManager;
            _accountRepository = accountRepository;
            _userManager = userManager;
        }

        public async Task<CommandResult<TokenResponseViewModel>> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var account = _accountRepository.FirstOrDefault(_ => _.Email == request.Email);
            var signIn = await _signInManager.PasswordSignInAsync(account, request.Password, false, false);
            if (signIn.Succeeded is false)
                return CommandResult<TokenResponseViewModel>.Error("Account is not found");
            account.ModifyBlackFlag(account.Id);
            var claims = await getClaims(await _userManager.FindByEmailAsync(request.Email));
            var accessToken = generateToken(claims);
            var refreshToken = generateRefreshToken();
            account.SaveToken(accessToken, refreshToken, account.Id);
            return CommandResult<TokenResponseViewModel>.Success(new TokenResponseViewModel(accessToken, refreshToken));
        }

        private string generateToken(List<Claim> claims)
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

        private async Task<List<Claim>> getClaims(Account account)
        {
            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.NameId, account.Id),
                new Claim(JwtRegisteredClaimNames.Email, account.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var roles = await _userManager.GetRolesAsync(account);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }
    }
}
