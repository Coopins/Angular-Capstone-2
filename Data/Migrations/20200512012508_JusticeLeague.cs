﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class JusticeLeague : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Alias = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    IsActiveMember = table.Column<bool>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Members_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Members_UserId",
                table: "Members",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");
        }
    }
}
