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
    internal sealed class AccountEntityTypeConfiguration : IEntityTypeConfiguration<Account>
    {
        public void Configure(EntityTypeBuilder<Account> builder)
        {
            builder.HasKey(t => t.Id);
            //builder
            //    .HasOne(_ => _.User)
            //    .WithOne(_ => _.Account)
            //    .HasForeignKey<User>(_ => _.AccountId)
            //    .OnDelete(DeleteBehavior.Cascade);
            //builder
            //     .HasMany(_ => _.Tokens)
            //     .WithOne(_ => _.Account)
            //     .HasForeignKey(_ => _.AccountId)
            //     .OnDelete(DeleteBehavior.Cascade);

            var userNavigation = builder.Metadata.FindNavigation(nameof(Account.User));
            userNavigation.SetPropertyAccessMode(PropertyAccessMode.Field);

            var refreshTokenNavigation = builder.Metadata.FindNavigation(nameof(Account.Tokens));
            refreshTokenNavigation.SetPropertyAccessMode(PropertyAccessMode.Property);
        }
    }
}
