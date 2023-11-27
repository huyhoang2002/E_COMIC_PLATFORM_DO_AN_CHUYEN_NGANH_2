using Favorite.Data.Persistences.DbContexts;
using Favorite.Data.Repositories;
using Favorite.Data.Repositories.Interfaces;
using Favorite.Data.UnitOfWorks;
using Favorite.Data.UnitOfWorks.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<FavoriteDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("Default"));
            });
            var serviceProvider = services.BuildServiceProvider();
            using var context = serviceProvider.GetRequiredService<FavoriteDbContext>();
            context.Database.Migrate();
            return services;
        }

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IFavoriteRepository, FavoriteRepository>();
            return services;
        }

        public static IServiceCollection AddUnitOfWork(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }

        public static IServiceCollection AddMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            return services;
        }
    }
}
