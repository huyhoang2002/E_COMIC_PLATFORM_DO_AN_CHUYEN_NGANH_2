namespace Comic_service.SignalR.Models
{
    public class ReceiveCommentNotificationModel
    {
        public ReceiveCommentNotificationModel(string userId, int commentCount)
        {
            UserId = userId;
            CommentCount = commentCount;
        }

        public string UserId { get; set; }
        public int CommentCount { get; set; }
    }
}
