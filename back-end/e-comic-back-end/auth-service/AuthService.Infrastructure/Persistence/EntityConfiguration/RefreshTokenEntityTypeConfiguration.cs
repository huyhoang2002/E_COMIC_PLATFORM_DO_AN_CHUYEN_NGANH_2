using AuthService.Domain.Aggregates.Account;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Infrastructure.Persistence.EntityConfiguration
{
    internal sealed class RefreshTokenEntityTypeConfiguration : IEntityTypeConfiguration<Token>
    {
        public void Configure(EntityTypeBuilder<Token> builder)
        {
            builder.ToTable("TOKEN_TABLE");
            builder.HasKey(_ => _.Id);
            builder.Property(_ => _.Id).ValueGeneratedOnAdd();
            builder.Property(_ => _.CreatedDate).ValueGeneratedOnAdd();
            builder
                .HasOne(_ => _.Account)
                .WithMany(_ => _.Tokens)
                .HasForeignKey(_ => _.AccountId);

        }
    }
}
