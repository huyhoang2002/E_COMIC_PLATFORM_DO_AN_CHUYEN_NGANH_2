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
    internal sealed class ComicEntityTypeConfiguration : IEntityTypeConfiguration<Comic>
    {
        public void Configure(EntityTypeBuilder<Comic> builder)
        {
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();
            builder
                .HasOne(_ => _.Author)
                .WithMany(_ => _.Comics)
                .HasForeignKey(_ => _.AuthorId);

            var comicEpisodeNavigation = builder.Metadata.FindNavigation(nameof(Comic.ComicEpisodes));
            comicEpisodeNavigation.SetPropertyAccessMode(PropertyAccessMode.Field);
        }
    }
}
