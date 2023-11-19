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
using User_API.ThirdPartyServices.Interfaces;
using User_API.ThirdPartyServices;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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

        public static IServiceCollection AddCrossOriginResource(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("user-cors", policy =>
                {
                    policy
                    .WithOrigins(new string[] { "http://localhost:5173" })
                    .AllowAnyMethod();
                });
            });
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

        public static IServiceCollection AddCloudinary(this IServiceCollection services)
        {
            services.AddScoped<ICloudinaryService, CloudinaryService>();
            return services;
        }

        public static IServiceCollection AddPublisher(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMassTransit(config =>
            {
                config.UsingRabbitMq((ctx, config) =>
                {
                    config.Host(configuration["EventBusSettings:RabbitMQ"]);
                });
            });
            return services;
        }
    }
}
