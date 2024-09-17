namespace User_API.ViewModels.Requests
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
