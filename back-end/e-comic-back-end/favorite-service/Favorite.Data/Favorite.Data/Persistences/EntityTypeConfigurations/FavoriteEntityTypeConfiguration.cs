using Favorite.Business.Entities.Favorites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.Persistences.EntityTypeConfigurations
{
    internal sealed class FavoriteEntityTypeConfiguration : IEntityTypeConfiguration<FavoriteEntity>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<FavoriteEntity> builder)
        {
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();
        }
    }
}
