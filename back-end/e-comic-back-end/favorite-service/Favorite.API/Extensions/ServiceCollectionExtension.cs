﻿using EventProcessor.Commons.EventName;
using Favorite.API.Consumers;
using MassTransit;

namespace Favorite.API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddConsumer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMassTransit(config =>
            {
                config.AddConsumer<AddComicToFavoriteConsumer>();
                config.AddConsumer<RemoveComicFromFavoriteConsumer>(); 
                config.UsingRabbitMq((ctx, config) =>
                {
                    config.Host(configuration["EventBusSettings:RabbitMQ"], host =>
                    {
                        host.Username("guest");
                        host.Password("guest");
                    });
                    config.ReceiveEndpoint(EventBusConstant.ADD_COMIC_TO_FAVORITE_EVENT, config =>
                    {
                        config.ConfigureConsumer<AddComicToFavoriteConsumer>(ctx);
                    });
                    config.ReceiveEndpoint(EventBusConstant.REMOVE_COMIC_FROM_FAVORITE_EVENT, config =>
                    {
                        config.ConfigureConsumer<RemoveComicFromFavoriteConsumer>(ctx);
                    });
                });
            });
            return services;
        }
    }
}
