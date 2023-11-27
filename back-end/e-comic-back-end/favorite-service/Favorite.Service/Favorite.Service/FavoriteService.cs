using AutoMapper;
using Favorite.Business.Entities.Favorites;
using Favorite.Data.DTOs.Bases;
using Favorite.Data.DTOs.Requests;
using Favorite.Data.DTOs.Responses;
using Favorite.Data.Repositories.Interfaces;
using Favorite.Data.UnitOfWorks.Interfaces;
using Favorite.Service.Interfaces;

namespace Favorite.Service
{
    public class FavoriteService : IFavoriteService
    {
        private readonly IFavoriteRepository _repository;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public FavoriteService(IFavoriteRepository repository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<Response> AddComicToFavorite(AddComicToFavoriteRequest request)
        {
            var favoriteEntityMapper = _mapper.Map<FavoriteEntity>(request);
            await _repository.AddAsync(favoriteEntityMapper);
            var result = await _unitOfWork.SaveChangesAsync();
            if (result <= 0)
            {
                return new Response(false, "Create user failed");
            }
            return new Response(true, "Create user successfully");
        }

        public Task<IQueryable<GetFavoriteComicResponse>> GetFavoriteComicsByUserId(Guid userId)
        {
            var favoriteComics = _repository.GetQuery(_ => _.UserId == userId);
            var getFavoriteComicResponse = _mapper.Map<IQueryable<GetFavoriteComicResponse>>(favoriteComics);
            return Task.FromResult(getFavoriteComicResponse);
        }

        public Task RemoveComicFromFavorite()
        {
            throw new NotImplementedException();
        }
    }
}
