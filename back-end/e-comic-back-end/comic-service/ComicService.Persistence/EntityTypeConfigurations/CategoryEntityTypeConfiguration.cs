using ComicService.Domain.Aggregates.Categories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Persistence.EntityTypeConfigurations
{
    internal sealed class CategoryEntityTypeConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();


            var comicNavigation = builder.Metadata.FindNavigation(nameof(Category.Comics));
            comicNavigation.SetPropertyAccessMode(PropertyAccessMode.Field);
        }
    }
}
