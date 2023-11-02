namespace User_API.ThirdPartyServices.Interfaces
{
    public interface ICloudinaryService
    {
        Task<string> UploadImageAsync(string filePath);
    }
}
