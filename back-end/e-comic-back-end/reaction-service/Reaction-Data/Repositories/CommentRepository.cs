using Reaction_Business.Entities;
using Reaction_Data.Bases;
using Reaction_Data.DbContexts;
using Reaction_Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.Repositories
{
    public class CommentRepository : RepositoryBase<Comment>, ICommentRepository
    {
        public CommentRepository(ReactionDbContext dbContext) : base(dbContext)
        {
        }
    }
}
