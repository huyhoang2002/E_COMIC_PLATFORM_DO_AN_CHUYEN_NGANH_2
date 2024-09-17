using ComicService.Domain.Aggregates.Categories;
using ComicService.Infrastructure.Base;
using ComicService.Infrastructure.Repositories.Interfaces;
using ComicService.Persistence.DbContexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.Repositories
{
    public class CategoryRepository : RepositoryBase<Category>, ICategoryRepository
    {
        public CategoryRepository(ComicDbContext dbContext) : base(dbContext)
        {

        }

        public override Category FirstOrDefault(Expression<Func<Category, bool>> predicate)
        {
            return DbSet.Include(_ => _.Comics).FirstOrDefault(predicate); 
        }
    }
}
