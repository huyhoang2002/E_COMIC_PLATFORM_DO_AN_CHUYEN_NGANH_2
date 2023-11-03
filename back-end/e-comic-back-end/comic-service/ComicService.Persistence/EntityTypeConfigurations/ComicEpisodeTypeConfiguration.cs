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
    internal sealed class ComicEpisodeTypeConfiguration : IEntityTypeConfiguration<ComicEpisode>
    {
        public void Configure(EntityTypeBuilder<ComicEpisode> builder)
        {
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();
            builder
                .HasOne(_ => _.Comic)
                .WithMany(_ => _.ComicEpisodes)
                .HasForeignKey(_ => _.ComicId);

            var episodeImage = builder.Metadata.FindNavigation(nameof(ComicEpisode.EpisodeImages));
            episodeImage.SetPropertyAccessMode(PropertyAccessMode.Field);
        }
    }
}
