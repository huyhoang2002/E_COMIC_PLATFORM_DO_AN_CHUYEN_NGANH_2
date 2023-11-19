using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOcelot();

builder.Configuration.AddJsonFile("ocelot.Development.json");

builder.Services.AddCors(options =>
{
    options.AddPolicy("gateway-cors", policy =>
    {
        policy.WithOrigins(new string[] { "http://localhost:5173" }).AllowAnyHeader().AllowAnyMethod().AllowCredentials();
    });
});
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.UseCors("gateway-cors");

app.UseOcelot();

app.Run();
