using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Seedworks
{
    public abstract class EntityBase<TId>
    {
        public TId Id { get; private set; }
        public DateTime ModifiedAt { get; private set; } = DateTime.Now;
    }
}
