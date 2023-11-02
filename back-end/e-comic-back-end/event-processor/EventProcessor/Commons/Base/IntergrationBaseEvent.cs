using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Commons.Base
{
    public abstract class IntergrationBaseEvent
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }

        public IntergrationBaseEvent()
        {

        }

        public IntergrationBaseEvent(Guid id, DateTime createdAt)
        {
            Id = id;
            CreatedAt = createdAt;
        }
    }
}
