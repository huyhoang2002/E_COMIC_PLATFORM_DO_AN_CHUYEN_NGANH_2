using ComicService.Application.Features.CQRS.Commands.Authors;
using ComicService.Domain.Aggregates.Authors;
using ComicService.Infrastructure.Repositories.Interfaces;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTest
{
    public class CreateAuthorTest
    {
        private readonly Mock<IAuthorRepository> _mockAuthorRepository = new();
        private readonly CreateAuthorCommand _command = new()
        {
            Name = "Author1",
            DateOfBirth = DateTime.Now,
            Description = "abc"
        };

        [Fact]
        public async Task It_should_return_success_command_result_including_author_id_after_create_author()
        {
            //arrage
            var author = getSampleAuthor();
            
            //act
            _mockAuthorRepository.Setup(_ => _.AddAsync(author)).Returns(Task.FromResult(author.Id));
            var handler = new CreateAuthorCommandHandler(_mockAuthorRepository.Object);
            var result = await handler.Handle(_command, CancellationToken.None);

            //assert
            Assert.True(result.IsSuccess);
        }

        private Author getSampleAuthor()
        {
            return new Author("Author 1", DateTime.Now, "abc");
        }
    }
}
