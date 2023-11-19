using EventProcessor.Events;
using MassTransit;
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
        private readonly IPublishEndpoint _publisher;
        public UserController(IUserService userService, IPublishEndpoint publisher)
        {
            _userService = userService;
            _publisher = publisher;
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "ADMIN")]
        public async Task<IActionResult> GetUserDatas([FromQuery] bool isDisable)
        {
            var result = _userService.GetUserDatas(isDisable);
            return Ok(result);
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            await _userService.CreateUser(HttpContext, request);
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

        [HttpPut("{id}/disable")]
        public async Task<IActionResult> DisableUser(Guid id)
        {
            var result = await _userService.DisableUser(id);
            return Ok(result);
        }

        [HttpPut("{id}/enable")]
        public async Task<IActionResult> EnableUser(Guid id)
        {
            var result = await _userService.EnableUser(id);
            return Ok(result);
        }

        [HttpGet("profile")]
        [Authorize(Roles = "USER", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> GetUserByToken()
        {
            var result = _userService.GetUserByAccessToken(HttpContext);
            return Ok(result);
        }

        [HttpPost("comment")]
        [Authorize(Roles = "USER", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> Comment([FromBody] AddCommentRequest request)
        {
            var eventMessage = new AddCommentEvent(request.CommentText, request.CommentImage, request.UserName, request.UserId, request.UserAvatar, request.CommicId);
            await _publisher.Publish(eventMessage);
            return Ok(BaseResponse.Success());
        }
    }
}
