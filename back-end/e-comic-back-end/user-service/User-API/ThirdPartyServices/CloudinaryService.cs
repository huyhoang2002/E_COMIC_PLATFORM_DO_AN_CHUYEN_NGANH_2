using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using User_API.ThirdPartyServices.Interfaces;

namespace User_API.ThirdPartyServices
{
    public class CloudinaryService : ICloudinaryService
    {
        private readonly IConfiguration _configuration;
        private Cloudinary _cloudinary;
        public CloudinaryService(IConfiguration configuration)
        {
            _cloudinary = new Cloudinary(configuration["Cloudinary:Url"]);
            _configuration = configuration;
        }

        public async Task<string> UploadImageAsync(string filePath)
        {
            var updloadParams = new ImageUploadParams()
            {
                File = new FileDescription(filePath),
                UseFilename = true,
                UniqueFilename = true,
                Overwrite = true
            };
            var result = await _cloudinary.UploadAsync(updloadParams);
            return result.Url.ToString();
        }
    }
}
