using Reaction_Business.Bases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Business.Entities
{
    public class Comment : EntityBase<Guid>
    {
        public string CommentText { get; set; }
        public string CommentImage { get; set; }
        public string UserName { get; set; }
        public Guid UserId { get; set; }
        public string UserAvatar { get; set; }
    }
}
