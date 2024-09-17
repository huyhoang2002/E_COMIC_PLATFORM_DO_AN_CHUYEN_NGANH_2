using ComicService.Domain.Aggregates.Comics;
using Microsoft.EntityFrameworkCore;
using Reaction_Business.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Reaction_Data.DbContexts
{
    public class ReactionDbContext : DbContext
    {
        public ReactionDbContext(DbContextOptions<ReactionDbContext> options) : base(options)
        {

        }

        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
