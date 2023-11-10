using ComicService.Persistence.Extensions;
using ComicService.Infrastructure.Extensions;
using ComicService.Application.Extensions;

    var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddUnitOfWork();
builder.Services.AddCqrsBus();
builder.Services.AddRepository();
builder.Services.AddCommandQuery();
builder.Services.AddAuth(builder.Configuration);
builder.Services.AddCloudinary();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
