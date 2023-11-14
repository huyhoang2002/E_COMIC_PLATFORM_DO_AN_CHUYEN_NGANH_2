using EventProcessor.Commons.EventName;
using MassTransit;
using Reaction_API.Consumers;

namespace Reaction_API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddConsumer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMassTransit(config =>
            {
                config.AddConsumer<AddCommentConsumer>();
                config.UsingRabbitMq((ctx, config) =>
                {
                    config.Host(configuration["EventBusSettings:RabbitMQ"], host =>
                    {
                        host.Username("guest");
                        host.Password("guest");
                    });
                    config.ReceiveEndpoint(EventBusConstant.ADD_COMMENT_EVENT, config =>
                    {
                        config.ConfigureConsumer<AddCommentConsumer>(ctx);
                    });
                });
            });
            return services;
        }
    }
}
