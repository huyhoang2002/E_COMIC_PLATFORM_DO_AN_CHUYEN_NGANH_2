using ComicService.Application.ViewModels.Responses;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class GetComicQuery : IQuery<GetComicResponse>
    {
        public Guid Id { get; set; }
    }

    public class GetComicQueryHandler : IQueryHandler<GetComicQuery, GetComicResponse>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<GetComicResponse> Handle(GetComicQuery request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic is null)
            {
                return null;
            }
            return new GetComicResponse(
                comic.Id, 
                comic.Title, 
                comic.Description, 
                comic.ImageUrl, 
                new AuthorResponse(comic.Author), 
                new GetCategoriesResponse(comic.Category), 
                comic.ModifiedAt,
                comic.WallPaperUrl
            );
        }
    }
}
