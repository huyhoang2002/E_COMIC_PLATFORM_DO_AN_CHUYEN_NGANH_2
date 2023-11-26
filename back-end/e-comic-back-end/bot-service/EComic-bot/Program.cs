using EComic_bot.Bots;
using Microsoft.AspNetCore.Builder;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.BotFramework;
using Microsoft.Bot.Builder.Integration.AspNet.Core;
using Microsoft.Bot.Schema;
using Microsoft.Extensions.Configuration;
using Microsoft.Recognizers.Text.Config;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IBot, EComicBot>();
var storage = new MemoryStorage();
var conversationState = new ConversationState(storage);
builder.Services.AddSingleton(conversationState);
builder.Services.AddBot<EComicBot>(options =>
{
    options.State.Add(conversationState);
    options.Middleware.Add(new AutoSaveStateMiddleware(conversationState));
});
builder.Services.AddSingleton<IBotFrameworkHttpAdapter, BotFrameworkHttpAdapter>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseAuthorization();

app.UseBotFramework();

app.MapControllers();

app.Run();
