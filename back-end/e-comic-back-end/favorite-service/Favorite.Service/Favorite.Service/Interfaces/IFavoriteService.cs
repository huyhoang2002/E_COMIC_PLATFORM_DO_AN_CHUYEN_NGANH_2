using Favorite.Data.DTOs.Bases;
using Favorite.Data.DTOs.Requests;
using Favorite.Data.DTOs.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Service.Interfaces
{
    public interface IFavoriteService
    {
        Task<Response> AddComicToFavorite(AddComicToFavoriteRequest request);
        Task<Response> RemoveComicFromFavorite(Guid id);
        Task<IQueryable<GetFavoriteComicResponse>> GetFavoriteComicsByUserId(Guid userId);
    }
}
