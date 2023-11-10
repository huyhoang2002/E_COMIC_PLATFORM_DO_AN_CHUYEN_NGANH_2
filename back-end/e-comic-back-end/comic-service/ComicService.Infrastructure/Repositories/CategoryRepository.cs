using ComicService.Domain.Aggregates.Categories;
using ComicService.Infrastructure.Base;
using ComicService.Infrastructure.Repositories.Interfaces;
using ComicService.Persistence.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.Repositories
{
    public class CategoryRepository : RepositoryBase<Category>, ICategoryRepository
    {
        public CategoryRepository(ComicDbContext dbContext) : base(dbContext)
        {
        }
    }
}
