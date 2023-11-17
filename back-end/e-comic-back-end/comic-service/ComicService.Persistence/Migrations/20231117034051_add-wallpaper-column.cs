using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComicService.Persistence.Migrations
{
    public partial class addwallpapercolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WallPaperUrl",
                table: "Comics",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WallPaperUrl",
                table: "Comics");
        }
    }
}
