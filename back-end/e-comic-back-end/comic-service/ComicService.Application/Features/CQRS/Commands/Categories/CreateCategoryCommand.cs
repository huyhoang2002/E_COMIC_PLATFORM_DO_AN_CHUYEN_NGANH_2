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
    public class CreateCategoryCommand : ICommand<CommandResult<Guid>>
    {
        public string CategoryName { get; set; }
    }

    public class CreateCategoryCommandHandler : ICommandHandler<CreateCategoryCommand, CommandResult<Guid>>
    {
        private readonly ICategoryRepository _categoryRepository;
        
        public CreateCategoryCommandHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public async Task<CommandResult<Guid>> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            
            var category = new Category(request.CategoryName);
            if (category.IsCategoryNameNull()) return CommandResult<Guid>.Error("Category name is empty");
            await _categoryRepository.AddAsync(category);
            return CommandResult<Guid>.Success(category.Id);
        }
    }
}
