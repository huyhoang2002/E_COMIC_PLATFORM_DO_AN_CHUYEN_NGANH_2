using Comic_service.SignalR.Hubs.Interfaces;
using Comic_service.SignalR.Models;
using Microsoft.AspNetCore.SignalR;
using System.Text.Json;

namespace Comic_service.SignalR.Hubs
{
    public class CommentHub : Hub<ICommentHub>
    {
        private readonly ILogger<CommentHub> _logger;

        public CommentHub(ILogger<CommentHub> logger)
        {
            _logger = logger;
        }

        public async Task ReceviceCommentNotificationAsync(SendCommentNotificationModel model)
        {
            try
            {
                await Clients.Group(model.ComicId).ReceviceCommentNotificationAsync(new ReceiveCommentNotificationModel(model.UserId, model.CommentCount));
                _logger.LogInformation(JsonSerializer.Serialize(new
                {
                    model.CommentCount,
                    model.ComicId,
                    model.UserId
                }));
            } catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
        }

        public async Task AddToComicAsync(string comicId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, comicId);
            _logger.LogInformation($"add to group {comicId}");
        }

        public async Task RemoveFromComicAsync(string comicId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, comicId);
            _logger.LogInformation($"remove from group {comicId}");
        }
    }
}
