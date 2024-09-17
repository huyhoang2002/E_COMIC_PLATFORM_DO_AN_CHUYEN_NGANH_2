using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.DTOs.Requests
{
    public class AddCommentRequest
    {
        public string CommentText { get; set; }
        public string CommentImage { get; set; }
        public string UserName { get; set; }
        public Guid UserId { get; set; }
        public string UserAvatar { get; set; }
        public Guid CommicId { get; set; }
    }
}
