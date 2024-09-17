using ComicService.Application.Services.CloudinaryService.Interfaces;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Authors
{
    public class UpdateAuthorAvatarCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
    }

    public class UpdateAuthorAvatarCommandHandler : ICommandHandler<UpdateAuthorAvatarCommand, CommandResult<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly ICloudinaryService _cloudinaryService;
        public UpdateAuthorAvatarCommandHandler(IAuthorRepository authorRepository, ICloudinaryService cloudinaryService)
        {
            _authorRepository = authorRepository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(UpdateAuthorAvatarCommand request, CancellationToken cancellationToken)
        {
            var author = _authorRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (request.Path is null)
            {
                return CommandResult<Guid>.Error("Image path is not found");
            }
            var cloudinaryUrl = await _cloudinaryService.UploadImageAsync(request.Path);
            author.UpdateAvatarImage(cloudinaryUrl);
            _authorRepository.Update(author);
            return CommandResult<Guid>.Success(author.Id);
        }
    }
}
