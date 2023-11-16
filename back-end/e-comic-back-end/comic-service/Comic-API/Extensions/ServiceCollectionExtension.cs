namespace Comic_API.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddCrossOriginResource(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("comic_cors", policy =>
                {
                    policy.WithOrigins(new string[] { "http://localhost:5173" });
                });
            });
            return services;
        }
    }
}
