using ComicService.Application.Services.CloudinaryService.Interfaces;
using ComicService.Domain.Aggregates.Authors;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Authors
{
    public class UpdateAuthorCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Description { get; set; }
        public string AvatarImage { get; set; }
    }

    public class UpdateAuthorCommandHandler : ICommandHandler<UpdateAuthorCommand, CommandResult<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly ICloudinaryService _cloudinaryService;


        public UpdateAuthorCommandHandler(IAuthorRepository authorRepository, ICloudinaryService cloudinaryService)
        {
            _authorRepository = authorRepository;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<CommandResult<Guid>> Handle(UpdateAuthorCommand request, CancellationToken cancellationToken)
        {
            var author = _authorRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (request.Name is null && request.DateOfBirth.ToString() is null && request.Description is null)
            {
                return CommandResult<Guid>.Error("Some of fields are null");
            }
            var cloudinaryUrl = await _cloudinaryService.UploadImageAsync(request.AvatarImage);
            author.UpdateAuthor(request.Name, request.DateOfBirth, request.Description, cloudinaryUrl);

            _authorRepository.Update(author);
            return CommandResult<Guid>.Success(author.Id);
        }
    }
}
