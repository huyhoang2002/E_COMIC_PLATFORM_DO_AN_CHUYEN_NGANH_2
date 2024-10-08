using AuthService.Infrastructure.Extensions;
using AuthService.Application.Extensions;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddCommandQueryHandler();
builder.Services.AddUnitOfWork();
builder.Services.AddCqrsBus();
builder.Services.AddIdentity();
builder.Services.AddRepository();
builder.Services.AddCrossOriginResource();
builder.Services.AddAuth(builder.Configuration);
//builder.Services.AddMessageBus(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("auth-cors");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
