using Microsoft.AspNetCore.Authorization;
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
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            await _userService.CreateUser(request);
            return StatusCode(StatusCodes.Status201Created, BaseResponse.Success());
        }

        [HttpPut("avatar")]
        public async Task<IActionResult> UpdateAvatarImage(IFormFile file, [FromQuery] Guid id)
        {
            if (file != null && file.Length > 0)
            {
                var fileName = file.FileName;
                //var fileExtension = Path.GetExtension(fileName);
                var filePath = Path.Combine("Uploads", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                await _userService.UpdateUserAvatar(id, filePath);
                return Ok();
            }
            return BadRequest();
        }
    }
}
