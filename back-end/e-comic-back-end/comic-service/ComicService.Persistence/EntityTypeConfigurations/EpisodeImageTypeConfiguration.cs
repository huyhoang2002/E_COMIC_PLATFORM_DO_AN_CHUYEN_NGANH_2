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
    internal sealed class EpisodeImageTypeConfiguration : IEntityTypeConfiguration<EpisodeImage>
    {
        public void Configure(EntityTypeBuilder<EpisodeImage> builder)
        {
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();
            builder
                .HasOne(_ => _.ComicEpisode)
                .WithMany(_ => _.EpisodeImages)
                .HasForeignKey(_ => _.ComicEpisodeId);
            
        }
    }
}
