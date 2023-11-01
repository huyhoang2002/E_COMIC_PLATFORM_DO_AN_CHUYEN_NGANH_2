using AuthService.Domain.Aggregates.Account;
using AuthService.Infrastructure.Base;
using AuthService.Infrastructure.Base.Interfaces;
using AuthService.Infrastructure.CQRS.Command;
using AuthService.Infrastructure.Persistence.DbContext;
using AuthService.Infrastructure.Persistence.Repositories;
using AuthService.Infrastructure.Persistence.Repositories.interfaces;
using AuthService.Infrastructure.UnitOfWork;
using AuthService.Infrastructure.UnitOfWork.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AuthDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("Default"));
            });
            var serviceProvider = services.BuildServiceProvider();
            using (var context = serviceProvider.GetService<AuthDbContext>())
            {
                context.Database.Migrate();
            }
            return services;
        }

        public static IServiceCollection AddUnitOfWork(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfwork, UnitOfwork>();
            return services;
        }

        public static IServiceCollection AddCqrsBus(this IServiceCollection services)
        {
            services.AddScoped<ICommandBus, CommandBus>();
            return services;
        }

        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            //services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            services.AddScoped<IAccountRepository, AccountRepository>();
            return services;
        }
    }
}
