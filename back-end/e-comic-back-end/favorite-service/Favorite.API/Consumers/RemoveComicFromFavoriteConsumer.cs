using EventProcessor.Events;
using Favorite.Data.UnitOfWorks.Interfaces;
using Favorite.Service.Interfaces;
using MassTransit;

namespace Favorite.API.Consumers
{
    public class RemoveComicFromFavoriteConsumer : IConsumer<RemoveComicFromFavoriteEvent>
    {
        private readonly IFavoriteService _service;

        public RemoveComicFromFavoriteConsumer(IFavoriteService service)
        {
            _service = service;
        }

        public async Task Consume(ConsumeContext<RemoveComicFromFavoriteEvent> context)
        {
            if (!context.Message.Id.Equals(Guid.Empty)) 
            {
                await _service.RemoveComicFromFavorite(context.Message.Id);
            }
        }
    }
}
