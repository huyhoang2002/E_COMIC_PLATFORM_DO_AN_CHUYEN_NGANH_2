using AuthService.Application.CQRS.Commands;
using AuthService.Application.CQRS.Queries;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.CQRS.Query;
using MassTransit;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ICommandBus _commandBus;
        private readonly IQueryBus _queryBus;
        private readonly IPublishEndpoint _publisher;

        public AuthController(ICommandBus commandBus, IQueryBus queryBus)
        {
            _commandBus = commandBus;
            _queryBus = queryBus;
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

        [HttpPost]
        [Route("log-out")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> Logout([FromBody] LogoutCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }

        //[HttpGet]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        //public async Task<IActionResult> GetAccountId()
        //{
        //    var accessToken = Request.Headers.Authorization.ToString().Split(' ')[1];
        //    var query = new GetAccountIdQuery()
        //    {
        //        AccessToken = accessToken
        //    };
        //    var result = await _queryBus.SendAsync(query);
        //    await _publisher.Publish(result);
        //    return Ok(result);
        //}

        //[HttpGet]
        //[Route("{id}")]
        //public async Task<IActionResult> GetAccountId(string id)
        //{
        //    var result = await _commandBus.SendAsync();
        //}
    }
}
