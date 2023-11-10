using ComicService.Application.Features.CQRS.Commands.Categories;
using ComicService.Application.Features.CQRS.Queries.Categories;
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
    public class CategoryController : ControllerBase
    {
        private readonly ICommandBus _commandBus;
        private readonly IQueryBus _queryBus;
        public CategoryController(ICommandBus commandBus, IQueryBus queryBus)
        {
            _commandBus = commandBus;
            _queryBus = queryBus;
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryCommand request)
        {
            var result = await _commandBus.SendAsync(request);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories([FromQuery] bool isDeleted)
        {
            var result = await _queryBus.SendAsync(new GetCategoriesQuery() { IsDeleted = isDeleted });
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetCategories(Guid id)
        {
            var query = new GetCategoryByIdQuery()
            {
                Id = id
            };
            var result = await _queryBus.SendAsync(query);
            return Ok(result);
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCategoryName(Guid id, [FromBody] UpdateCategoryRequest request) 
        {
            var command = new UpdateCategoryNameCommand()
            {
                Id = id,
                CategoryName = request.CategoryName
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }

        [HttpDelete]
        [Authorize(Roles = "ADMIN", AuthenticationSchemes = "Bearer")]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCategory(Guid id)
        {
            var command = new DeleteCategoryCommand
            {
                Id = id
            };
            var result = await _commandBus.SendAsync(command);
            return Ok(result);
        }
    }
}
