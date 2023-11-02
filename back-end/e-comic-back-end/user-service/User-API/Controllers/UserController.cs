using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User_API.Services.Interfaces;
using User_API.ViewModels.Base;
using User_API.ViewModels.Requests;

namespace User_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            await _userService.CreateUser(request);
            return StatusCode(StatusCodes.Status201Created, BaseResponse.Success());
        }
    }
}
