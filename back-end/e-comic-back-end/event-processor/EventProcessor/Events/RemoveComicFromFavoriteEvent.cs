using EventProcessor.Commons.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events
{
    public class RemoveComicFromFavoriteEvent : IntergrationBaseEvent
    {
        public RemoveComicFromFavoriteEvent(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }
    }
}
