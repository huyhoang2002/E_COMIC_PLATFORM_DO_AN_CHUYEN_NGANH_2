using ComicService.Domain.Aggregates.Comics;
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
    public class ComicRepository : RepositoryBase<Comic>, IComicRepository
    {
        public ComicRepository(ComicDbContext dbContext) : base(dbContext)
        {
        }

        public override Comic FirstOrDefault(Expression<Func<Comic, bool>> predicate)
        {
            return DbSet.Include(_ => _.Category).Include(_ => _.Author).FirstOrDefault(predicate);
        }
    }
}
