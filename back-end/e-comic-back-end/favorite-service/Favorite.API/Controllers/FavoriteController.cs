using Favorite.Data.DTOs.Requests;
using Favorite.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Favorite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly IFavoriteService _service;

        public FavoriteController(IFavoriteService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> AddComicToFavorite([FromBody] AddComicToFavoriteRequest request)
        {
            var result = await _service.AddComicToFavorite(request);
            return Ok(result); 
        }

        [HttpGet]
        [Route("{userId}")]
        public async Task<IActionResult> GetFavoriteComicsByUserId(Guid userId)
        {
            var result = await _service.GetFavoriteComicsByUserId(userId);
            return Ok(result);
        }
    }
}
