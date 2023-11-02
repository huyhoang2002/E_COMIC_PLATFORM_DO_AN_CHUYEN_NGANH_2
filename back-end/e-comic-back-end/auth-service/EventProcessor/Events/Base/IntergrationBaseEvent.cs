using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events.Base
{
    public abstract class IntergrationBaseEvent
    {
        public Guid Id { get; set; }
        public DateTime CreationTime { get; set; }
        public IntergrationBaseEvent()
        {
            Id = new Guid();
            CreationTime = DateTime.Now;
        }
    }
}
