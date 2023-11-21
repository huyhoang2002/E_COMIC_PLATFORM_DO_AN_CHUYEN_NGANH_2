using ComicService.Application.Features.CQRS.Commands.Authors;
using ComicService.Application.Features.CQRS.Queries.Authors;
using ComicService.Application.ViewModels.Base.Requests;
using ComicService.Application.ViewModels.Requests;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.CQRS.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Comic_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly ICommandBus _commandBus;
        private readonly IQueryBus _queryBus;

        public AuthorController(ICommandBus commandBus, IQueryBus queryBus)
        {
            _commandBus = commandBus;
            _queryBus = queryBus;
        }

        [HttpGet]
        public async Task<IActionResult> GetAuthors([FromQuery] GetAuthorRequest request)
        {
            var query = new GetAuthorsQuery()
            {
                IsDeleted = request.IsDeleted,
                Keyword = request.Keyword
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetAuthors(Guid id)
        {
            var query = new GetAuthorByIdQuery()
            {
                Id = id
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateAuthor([FromBody] CreateAuthorCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        [Route("{id}/avatar")]
        public async Task<IActionResult> UpdateAvatarImage(Guid id, IFormFile file)
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
                var command = new UpdateAuthorAvatarCommand()
                {
                    Id = id,
                    Path = filePath
                };
                var result = await _commandBus.SendAsync(command);
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAuthor(Guid id, [FromForm] UpdateAuthorRequest request, IFormFile file)
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
                var command = new UpdateAuthorCommand()
                {
                    Id = id,
                    Name = request.Name,
                    AvatarImage = filePath,
                    DateOfBirth = request.DateOfBirth,
                    Description = request.Description
                };
                var result = await _commandBus.SendAsync(command);
                return Ok(result);
            }
            return BadRequest();
        }
    } 
}
