using ComicService.Application.Services.CloudinaryService.Interfaces;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Comics
{
    public class UpdateComicWallpaperCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
        public string FilePath { get; set; }
    }

    public class UpdateComicWallpaperCommandHandler : ICommandHandler<UpdateComicBackgroundImageCommand, CommandResult<Guid>>
    {
        private readonly IComicRepository _repository;
        private readonly ICloudinaryService _cloudinaryService;

        public UpdateComicWallpaperCommandHandler(IComicRepository repository, ICloudinaryService cloudinaryService)
        {
            _repository = repository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(UpdateComicBackgroundImageCommand request, CancellationToken cancellationToken)
        {
            var comic = _repository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic is null)
                return CommandResult<Guid>.Error("Comic is not found");
            var url = await _cloudinaryService.UploadImageAsync(request.Path);
            if (url is null)
                return CommandResult<Guid>.Error("Failed to upload image to cloud service");
            comic.UpdateWallPaperUrl(url);
            _repository.Update(comic);
            return CommandResult<Guid>.Success(comic.Id);
        }
    }
}
