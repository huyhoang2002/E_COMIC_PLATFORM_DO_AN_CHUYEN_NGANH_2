namespace API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddCrossOriginResource(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("auth-cors", policy =>
                {
                    policy
                    .WithOrigins(new string[] { "http://localhost:5173" })
                    .AllowAnyMethod();
                });
            });
            return services;
        }
    }
}
