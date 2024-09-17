using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Reaction_Data.Migrations
{
    public partial class addcomicidcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CommicId",
                table: "Comments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CommicId",
                table: "Comments");
        }
    }
}
