using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Business.Bases
{
    public abstract class EntityBase<T>
    {
        public T Id { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsDeleted { get; set; } = false;
        public bool IsHidden { get; set; } = false;
    }
}
