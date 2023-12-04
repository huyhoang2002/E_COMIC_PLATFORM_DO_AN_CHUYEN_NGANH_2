using EventProcessor.Commons.EventName;
using Favorite.API.Consumers;
using MassTransit;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Favorite.API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddAuth(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = configuration["JWT:Issuer"],
                    ValidAudience = configuration["JWT:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]!)),
                    RequireExpirationTime = true,
                };
            });
            return services;
        }
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
