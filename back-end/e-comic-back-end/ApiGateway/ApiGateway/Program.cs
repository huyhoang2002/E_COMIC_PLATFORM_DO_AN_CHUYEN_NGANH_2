using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("ocelot.json", true, true);
builder.Services.AddOcelot();

var app = builder.Build();



app.MapGet("/", () => "Hello World!");

app.UseOcelot();

app.Run();
