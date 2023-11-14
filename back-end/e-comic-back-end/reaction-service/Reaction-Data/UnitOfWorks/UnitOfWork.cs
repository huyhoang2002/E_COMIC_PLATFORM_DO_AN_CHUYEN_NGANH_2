using Reaction_Data.DbContexts;
using Reaction_Data.UnitOfWorks.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        protected ReactionDbContext Context { get; set; }

        public UnitOfWork(ReactionDbContext context)
        {
            Context = context;
        }

        public async Task SaveChangeAsync()
        {
            await Context.SaveChangesAsync();
        }
    }
}
