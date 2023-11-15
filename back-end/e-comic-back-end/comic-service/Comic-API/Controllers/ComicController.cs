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
        public async Task<IActionResult> GetComics([FromQuery] GetComicRequest request)
        {
            var query = new GetComicsQuery()
            {
                IsDeleted = request.IsDeleted,
                pageIndex = request.PageIndex,
                PageSize = request.PageSize,
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

        [HttpGet]
        [Route("{id}/episodes")]
        public async Task<IActionResult> GetComicEpisodes(Guid id)
        {
            var query = new GetComicEpisodeQuery()
            {
                ComicId = id
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}/episode")]
        public async Task<IActionResult> GetComicEpisodeDetail(Guid id)
        {
            var query = new GetComicEpisodeDetailQuery()
            {
                ComicId = id,
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

        [HttpPost]
        [Route("{id}/episode")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateComicEpisode(Guid id, [FromBody] CreateComiceEpisodeRequest request)
        {
            var command = new CreateComicEpisodeCommand
            {
                Episode = request.Episode,
                ComicId = id
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }

        [HttpPost]
        [Route("{id}/episode/{episodeId}")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateComicEpisodeDetail(Guid id, Guid EpisodeId, List<IFormFile> files)
        {
            if (files.Count.Equals(0))
            {
                return BadRequest();
            }
            var filePaths = new List<string>();
            foreach (var file in files)
            {
                if (file is not null || file.Length > 0)
                {
                    var fileName = file.FileName;
                    var filePath = Path.Combine("Uploads", fileName);
                    using var fileStream = new FileStream(filePath, FileMode.Create);
                    file.CopyTo(fileStream);
                    filePaths.Add(filePath);
                }
            }
            var command = new CreateEpisodeDetailCommand()
            {
                ComicId = id,
                EpisodeId = EpisodeId,
                ImageUrls = filePaths
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
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

        [HttpPut]
        [Route("{id}/restoration")]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = " Bearer")]
        public async Task<IActionResult> RestoreComic(Guid id)
        {
            var command = new RestoreComicCommand
            {
                ComicId = id
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }
    }
}
