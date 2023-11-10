using ComicService.Domain.Aggregates.Authors;
using ComicService.Infrastructure.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.Repositories.Interfaces
{
    public interface IAuthorRepository : IRepositoryBase<Author>
    {
    }
}
