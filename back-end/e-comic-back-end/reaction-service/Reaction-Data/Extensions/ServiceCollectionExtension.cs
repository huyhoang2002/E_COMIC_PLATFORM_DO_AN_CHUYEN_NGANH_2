using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Reaction_Data.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDBContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ReactionDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("Default"));

                var serviceProvider = services.BuildServiceProvider();
                using var context = serviceProvider.GetRequiredService<ReactionDbContext>();
                context.Database.Migrate();
            });
            return services;
        }
    }
}
