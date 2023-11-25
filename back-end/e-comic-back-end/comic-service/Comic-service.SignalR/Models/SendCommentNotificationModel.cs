namespace Comic_service.SignalR.Models
{
    public class SendCommentNotificationModel
    {
        public string UserId { get; set; }
        public string ComicId { get; set; }
        public int CommentCount { get; set; }
    }
}
