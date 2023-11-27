using AutoMapper;
using EventProcessor.Events;
using Favorite.Data.DTOs.Requests;
using Favorite.Data.UnitOfWorks.Interfaces;
using Favorite.Service.Interfaces;
using MassTransit;

namespace Favorite.API.Consumers
{
    public class AddComicToFavoriteConsumer : IConsumer<AddComicToFavoriteEvent>
    {
        private readonly IFavoriteService _service;
        private readonly IMapper _mapper;

        public AddComicToFavoriteConsumer(IFavoriteService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        public async Task Consume(ConsumeContext<AddComicToFavoriteEvent> context)
        {
            var addComicToFavoriteRequest = _mapper.Map<AddComicToFavoriteRequest>(context.Message);
            await _service.AddComicToFavorite(addComicToFavoriteRequest);
        }
    }
}
