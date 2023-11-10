using ComicService.Application.Services.CloudinaryService.Interfaces;
using ComicService.Domain.Aggregates.Authors;
using ComicService.Domain.Aggregates.Categories;
using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class CreateComicCommand : ICommand<CommandResult<Guid>>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Path { get; set; }
        public Guid AuthorId { get; set; }
        public Guid CategoryId { get; set; }
    }

    public class CreateComicCommandHandler : ICommandHandler<CreateComicCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _comicRepository;
        private readonly ICloudinaryService _cloudinaryService;

        public CreateComicCommandHandler(IComicRepository comicRepository, ICloudinaryService cloudinaryService)
        {
            _comicRepository = comicRepository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(CreateComicCommand request, CancellationToken cancellationToken)
        {
            var imageUrl = await _cloudinaryService.UploadImageAsync(request.Path);
            var comic = new Comic(request.Title, request.Description, imageUrl, request.AuthorId, request.CategoryId);
            if (request.Title is null || request.Description is null || imageUrl is null || request.AuthorId.Equals(null) || request.CategoryId.Equals(null))
                return CommandResult<Guid>.Error("Some of fields are empty");
            await _comicRepository.AddAsync(comic);
            return CommandResult<Guid>.Success(comic.Id);
        }
    }
}
