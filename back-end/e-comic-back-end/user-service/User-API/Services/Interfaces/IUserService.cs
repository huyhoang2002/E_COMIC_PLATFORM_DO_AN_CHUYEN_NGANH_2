using User_API.Entities;
using User_API.ViewModels.Base;
using User_API.ViewModels.Requests;

namespace User_API.Services.Interfaces
{
    public interface IUserService
    {
        Task<BaseResponse<Guid>> CreateUser(HttpContext context, CreateUserRequest request);
        Task UpdateAccountId(Guid userId, string accountId);
        Task UpdateUserAvatar(Guid userId, string path);
        IQueryable<User> GetUserDatas(bool isDisable);
        Task<BaseResponse> DisableUser(Guid userId);
        Task<BaseResponse> EnableUser(Guid userId);
        BaseResponse<User> GetUserByAccessToken(HttpContext context);
    }
}
