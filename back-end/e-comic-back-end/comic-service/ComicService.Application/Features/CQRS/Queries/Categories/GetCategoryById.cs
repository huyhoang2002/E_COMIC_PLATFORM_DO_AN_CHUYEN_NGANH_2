using ComicService.Domain.Aggregates.Categories;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Categories
{
    public class GetCategoryByIdQuery : IQuery<Category>
    {
        public Guid Id { get; set; }
    }

    public class GetCategoryByIdHandler : IQueryHandler<GetCategoryByIdQuery, Category>
    {
        private readonly ICategoryRepository _categoryRepository;
        public GetCategoryByIdHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public async Task<Category> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
        {
            if (request.Id.Equals(null))
            {
                return null;
            }
            var result = _categoryRepository.FirstOrDefault(_ => _.Id == request.Id);
            return result;
        }
    }
}
