namespace ComicService.Application.Services.CloudinaryService.Interfaces
{
    public interface ICloudinaryService
    {
        Task<string> UploadImageAsync(string filePath);
    }
}
