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
    public class UpdateCategoryNameCommand : ICommand<CommandResult<Guid>>
    { 
        public Guid Id { get; set; }
        public string CategoryName { get; set; }
    }

    public class UpdateCategoryNameCommandHandler : ICommandHandler<UpdateCategoryNameCommand, CommandResult<Guid>>
    {
        private readonly ICategoryRepository _categoryRepository;
        public UpdateCategoryNameCommandHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public async Task<CommandResult<Guid>> Handle(UpdateCategoryNameCommand request, CancellationToken cancellationToken)
        {
            var category = _categoryRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (category is null)
                return CommandResult<Guid>.Error("Category not found");
            if (request.CategoryName is null)
                return CommandResult<Guid>.Error("Please insert category name");
            category.UpdateCategoryName(request.CategoryName);
            return CommandResult<Guid>.Success(category.Id);
        }
    }
}
