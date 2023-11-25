using Comic_service.SignalR.Models;

namespace Comic_service.SignalR.Hubs.Interfaces
{
    public interface ICommentHub
    {
        Task ReceviceCommentNotificationAsync(ReceiveCommentNotificationModel model);
    }
}
