using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.CQRS.Query
{
    public class QueryResult<TResult>
    {
        public static TResult Return(TResult result)
        {
            return result;
        }
    }
}
