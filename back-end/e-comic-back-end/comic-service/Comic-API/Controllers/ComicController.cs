using ComicService.Application.Features.CQRS.Commands.Comics;
using ComicService.Application.Features.CQRS.Queries.Comics;
using ComicService.Application.ViewModels.Requests;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.CQRS.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Comic_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComicController : ControllerBase
    {
        private readonly ICommandBus _commandBus;
        private readonly IQueryBus _queryBus;

        public ComicController(ICommandBus commandBus, IQueryBus queryBus)
        {
            _commandBus = commandBus;
            _queryBus = queryBus;
        }

        [HttpGet]
        public async Task<IActionResult> GetComics([FromQuery] bool isDeleted)
        {
            var query = new GetComicsQuery()
            {
                IsDeleted = isDeleted
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetComic(Guid id)
        {
            var query = new GetComicQuery()
            {
                Id = id
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateComic([FromForm] CreateComicRequest request, IFormFile file)
        {
            if (file != null || file.Length >= 0)
            {
                var fileName = file.FileName;
                var filePath = Path.Combine("Uploads", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                var command = new CreateComicCommand
                {
                    Title = request.Title,
                    Description = request.Description,
                    AuthorId = request.AuthorId,
                    CategoryId = request.CategoryId,
                    Path = filePath
                };
                var result = await _commandBus.SendAsync(command);
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> UpdateComic(Guid id, [FromBody] UpdateComicRequest request)
        {
            var command = new UpdateComicCommand()
            {
                Id = id,
                Title = request.Title,
                Description = request.Description,
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}/background-image")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> UpdateBackgroundImage(Guid id, IFormFile file)
        {
            if (file != null || file.Length >= 0)
            {
                var fileName = file.FileName;
                var filePath = Path.Combine("Uploads", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                var command = new UpdateComicBackgroundImageCommand()
                {
                    Id = id,
                    Path = filePath,
                };
                var result = await _commandBus.SendAsync(command);
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("{id}/soft")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> SoftDeleteComic(Guid id)
        {
            var command = new SoftDeleteComicCommand()
            {
                Id = id
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }
    }
}
