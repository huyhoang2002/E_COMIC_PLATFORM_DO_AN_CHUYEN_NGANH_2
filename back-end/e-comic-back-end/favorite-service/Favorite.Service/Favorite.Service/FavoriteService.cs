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
            var favoriteComics = _repository.FirstOrDefault(_ => _.ComicId == request.ComicId);
            if (favoriteComics != null)
            {
                return new Response(false, "This comic has been added to your favorite");
            }
            var favoriteEntityMapper = _mapper.Map<FavoriteEntity>(request);
            await _repository.AddAsync(favoriteEntityMapper);
            var result = await _unitOfWork.SaveChangesAsync();
            if (result <= 0)
            {
                return new Response(false, "Add comic to favorite failed");
            }
            return new Response(true, "Add comic to favorite successfully");
        }

        public Task<IQueryable<GetFavoriteComicResponse>> GetFavoriteComicsByUserId(Guid userId)
        {
            var favoriteComics = _repository.GetQuery(_ => _.UserId == userId).OrderByDescending(_ => _.ModifiedDate);
            var response = favoriteComics.Select(_ => new GetFavoriteComicResponse(
                _.Id,
                _.ComicTitle,
                _.ComicUrl,
                _.ComicId,
                _.UserId,
                _.UserName,
                _.ModifiedDate
                ));
            return Task.FromResult(response);
        } 

        public Task<Response> RemoveComicFromFavorite(Guid id)
        {
            var favoriteComic = _repository.FirstOrDefault(_ => _.Id == id);
            if (favoriteComic == null)
            {
                return Task.FromResult(new Response(false, "favorite comic not found"));
            }
            _repository.Delete(favoriteComic);
            Task.FromResult(_unitOfWork.SaveChangesAsync());
            return Task.FromResult(new Response(true, "Remove comic success"));
        }
    }
}
