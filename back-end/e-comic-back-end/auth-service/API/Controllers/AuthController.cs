using AuthService.Application.CQRS.Commands;
using AuthService.Infrastructure.CQRS.Command;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ICommandBus _commandBus;

        public AuthController(ICommandBus commandBus)
        {
            _commandBus = commandBus;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }
    }
}
