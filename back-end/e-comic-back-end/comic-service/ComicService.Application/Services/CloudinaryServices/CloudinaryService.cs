using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using ComicService.Application.Services.CloudinaryService.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Services.CloudinaryService
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
