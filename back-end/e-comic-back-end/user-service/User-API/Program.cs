using User_API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddMapper();
builder.Services.AddService();
builder.Services.AddRepositories();
builder.Services.AddUnitOfWork();
builder.Services.AddCloudinary();
builder.Services.AddAuth(builder.Configuration);
builder.Services.AddPublisher(builder.Configuration);
builder.Services.AddCrossOriginResource();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("user-cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
