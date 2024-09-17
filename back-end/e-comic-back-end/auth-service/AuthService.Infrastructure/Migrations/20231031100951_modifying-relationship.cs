using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthService.Infrastructure.Migrations
{
    public partial class modifyingrelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TOKEN_TABLE_AspNetUsers_AccountId",
                table: "TOKEN_TABLE");

            migrationBuilder.DropForeignKey(
                name: "FK_USER_TABLE_AspNetUsers_AccountId",
                table: "USER_TABLE");

            migrationBuilder.AddForeignKey(
                name: "FK_TOKEN_TABLE_AspNetUsers_AccountId",
                table: "TOKEN_TABLE",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_USER_TABLE_AspNetUsers_AccountId",
                table: "USER_TABLE",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TOKEN_TABLE_AspNetUsers_AccountId",
                table: "TOKEN_TABLE");

            migrationBuilder.DropForeignKey(
                name: "FK_USER_TABLE_AspNetUsers_AccountId",
                table: "USER_TABLE");

            migrationBuilder.AddForeignKey(
                name: "FK_TOKEN_TABLE_AspNetUsers_AccountId",
                table: "TOKEN_TABLE",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_USER_TABLE_AspNetUsers_AccountId",
                table: "USER_TABLE",
                column: "AccountId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
