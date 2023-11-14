using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reaction_Business.Entities;
using Reaction_Data.DTOs.Requests;
using Reaction_Data.Repositories.Interfaces;

namespace Reaction_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactionController : ControllerBase
    {
        private readonly ICommentRepository _repository;

        public ReactionController(ICommentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("{comicId}")]
        public Task<IActionResult> GetCommentsByPostId(Guid comicId)
        {
            var comments = _repository.GetQuery(_ => _.CommicId == comicId);
            return Task.FromResult<IActionResult>(Ok(comments));
        }

        [HttpPost]
        public async Task<IActionResult> AddComment([FromBody] AddCommentRequest request)
        {
            var comment = new Comment(request.CommentText, request.CommentImage, request.UserName, request.UserId, request.UserAvatar, request.CommicId);
            await _repository.AddAsync(comment);
            return Ok(comment.Id);
        }
    }
}
