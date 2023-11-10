using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.CQRS.Query
{
    public interface IQueryBus
    {
        Task<object> SendAsync(object request);
    }
}
