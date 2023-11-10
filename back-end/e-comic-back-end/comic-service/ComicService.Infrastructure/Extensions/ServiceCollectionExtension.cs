using ComicService.Infrastructure.CQRS.Command;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories;
using ComicService.Infrastructure.Repositories.Interfaces;
using ComicService.Infrastructure.UnitOfWork;
using ComicService.Infrastructure.UnitOfWork.Interfaces;
using ComicService.Persistence.DbContexts;
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

namespace ComicService.Infrastructure.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddUnitOfWork(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfwork, UnitOfwork>();
            return services;
        }

        public static IServiceCollection AddCqrsBus(this IServiceCollection services)
        {
            services.AddScoped<ICommandBus, CommandBus>();
            services.AddScoped<IQueryBus, QueryBus>();
            return services;
        }

        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            //services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            services.AddScoped<IComicRepository, ComicRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            return services;
        }
    }
}
