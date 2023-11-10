using ComicService.Domain.Aggregates.Categories;
using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Commands.Categories
{
    public class DeleteCategoryCommand : ICommand<CommandResult<Guid>>
    {
        public Guid Id { get; set; }
    }

    public class DeleteCategoryCommandHandler : ICommandHandler<DeleteCategoryCommand, CommandResult<Guid>>
    {
        private readonly ICategoryRepository _categoryRepository;

        public DeleteCategoryCommandHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<CommandResult<Guid>> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = _categoryRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (category is null)
            {
                return CommandResult<Guid>.Error("Category not found");
            }
            category.SoftDelete();
            return CommandResult<Guid>.Success(category.Id);
        }
    }
}
