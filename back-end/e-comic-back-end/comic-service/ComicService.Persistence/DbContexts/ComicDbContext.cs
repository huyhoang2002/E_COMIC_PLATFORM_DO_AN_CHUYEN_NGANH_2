using ComicService.Domain.Aggregates.Authors;
using ComicService.Domain.Aggregates.Categories;
using ComicService.Domain.Aggregates.Comics;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Persistence.DbContexts
{
    public class ComicDbContext : DbContext
    {
        public ComicDbContext(DbContextOptions<ComicDbContext> options) : base(options)
        {

        }

        public DbSet<Comic> Comics { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<ComicEpisode> Episodes { get; set; }
        public DbSet<EpisodeImage> Images { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
