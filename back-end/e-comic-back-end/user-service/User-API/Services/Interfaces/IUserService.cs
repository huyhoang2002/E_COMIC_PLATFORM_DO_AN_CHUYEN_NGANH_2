﻿using User_API.Entities;
using User_API.ViewModels.Requests;

namespace User_API.Services.Interfaces
{
    public interface IUserService
    {
        Task<Guid> CreateUser(HttpContext context, CreateUserRequest request);
        Task UpdateAccountId(Guid userId, string accountId);
        Task UpdateUserAvatar(Guid userId, string path);
        IQueryable<User> GetUserDatas(bool isDisable);
    }
}
