using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Favorite.Data.Migrations
{
    public partial class addcomicIdcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ComicId",
                table: "Favorites",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ComicId",
                table: "Favorites");
        }
    }
}
