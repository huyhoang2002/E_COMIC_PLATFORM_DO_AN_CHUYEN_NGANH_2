using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using User_API.Persistence.DbContexts;
using User_API.Repository.repositories;
using User_API.Repository.repositories.Interfaces;
using User_API.Services;
using User_API.Services.Interfaces;
using User_API.UnitOfWork.Interfaces;
using User_API.UnitOfWork;
using MassTransit;
using EventProcessor.Commons;
using EventProcessor.Commons.EventName;

namespace User_API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<UserDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("Default"));
            });

            var ServiceProvider = services.BuildServiceProvider();
            using (var context = ServiceProvider.GetRequiredService<UserDbContext>())
            {
                context.Database.Migrate();
            }

            return services;
        }

        public static IServiceCollection AddMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            return services;
        }

        public static IServiceCollection AddService(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            return services;
        }

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            return services;
        }

        public static IServiceCollection AddUnitOfWork(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, User_API.UnitOfWork.UnitOfWork>();
            return services;
        }

        //public static IServiceCollection AddMessageBus(this IServiceCollection services, IConfiguration configuration)
        //{
        //    services.AddMassTransit(config =>
        //    {
        //        config.UsingRabbitMq((ctx, config) =>
        //        {
        //            config.Host(configuration["EventBusSettings:RabbitMQ"], config =>
        //            {
        //                config.Username("guest");
        //                config.Password("guest");
        //            });
        //            config.ReceiveEndpoint(EventBusConstant.ADD_ACCOUNT_ID_TO_USER_PROFILE, c =>
        //            {
        //                c.ConfigureConsumer<AccountIdConsumer>(ctx);
        //            });
        //        });
        //    });
        //    return services;
        //}
    }
}
