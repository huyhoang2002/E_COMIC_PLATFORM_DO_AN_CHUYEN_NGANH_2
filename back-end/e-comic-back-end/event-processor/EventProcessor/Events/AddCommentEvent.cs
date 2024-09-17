using EventProcessor.Commons.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events
{
    public class AddCommentEvent : IntergrationBaseEvent
    {
        public AddCommentEvent(string commentText, string commentImage, string userName, Guid userId, string userAvatar, Guid commicId)
        {
            CommentText = commentText;
            CommentImage = commentImage;
            UserName = userName;
            UserId = userId;
            UserAvatar = userAvatar;
            CommicId = commicId;
            ModifiedDate = DateTime.Now;
        }

        public string CommentText { get; set; }
        public string CommentImage { get; set; }
        public string UserName { get; set; }
        public Guid UserId { get; set; }
        public string UserAvatar { get; set; }
        public Guid CommicId { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
