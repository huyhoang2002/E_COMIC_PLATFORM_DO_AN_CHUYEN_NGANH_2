using ComicService.Domain.Aggregates.Authors;
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
    public class AuthorRepository : RepositoryBase<Author>, IAuthorRepository
    {
        public AuthorRepository(ComicDbContext dbContext) : base(dbContext)
        {
        }
    }
}
