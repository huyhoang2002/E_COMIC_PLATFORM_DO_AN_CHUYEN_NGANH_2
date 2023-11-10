using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.CQRS.Command
{
    public interface ICommandBus
    {
        Task<object> SendAsync(object request);
    }
}
