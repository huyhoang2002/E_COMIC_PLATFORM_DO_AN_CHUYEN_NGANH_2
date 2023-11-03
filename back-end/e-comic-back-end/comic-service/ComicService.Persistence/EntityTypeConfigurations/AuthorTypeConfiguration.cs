using ComicService.Domain.Aggregates.Comic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Persistence.EntityTypeConfigurations
{
    internal sealed class AuthorTypeConfiguration : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();

            var comicNavigation = builder.Metadata.FindNavigation(nameof(Author.Comics));
            comicNavigation.SetPropertyAccessMode(PropertyAccessMode.Field);
        }
    }
}
