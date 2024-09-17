using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.UnitOfWorks.Interfaces
{
    public interface IUnitOfWork 
    {
        Task SaveChangeAsync();
    }
}
