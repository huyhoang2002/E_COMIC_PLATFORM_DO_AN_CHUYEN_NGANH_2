using AutoMapper;
using System.IdentityModel.Tokens.Jwt;
using User_API.Entities;
using User_API.Helpers;
using User_API.Repository.repositories.Interfaces;
using User_API.Services.Interfaces;
using User_API.ThirdPartyServices.Interfaces;
using User_API.UnitOfWork.Interfaces;
using User_API.ViewModels.Base;
using User_API.ViewModels.Requests;
using User_API.ViewModels.Responses;

namespace User_API.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ICloudinaryService _cloudinaryService;
        private readonly IUnitOfWork _unitOfWork;
        public UserService(IUserRepository userRepository, IMapper mapper, IUnitOfWork unitOfWork, ICloudinaryService cloudinaryService)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _cloudinaryService = cloudinaryService;
        }

        public async Task<BaseResponse<Guid>> CreateUser(HttpContext context, CreateUserRequest request)
        {
            var accountId = getAccountIdFromToken(context);
            request.SetAccountId(accountId);
            var user = _mapper.Map<User>(request);
            var isUserExisted = _userRepository.FirstOrDefault(_ => _.AccountId == user.AccountId);
            if (isUserExisted is not null)
            {
                return BaseResponse<Guid>.Error("Failed to create user");
            }
            await _userRepository.AddAsync(user);
            await _unitOfWork.SaveChangeAsync();
            return BaseResponse<Guid>.Success(user.Id);
        }

        public async Task UpdateAccountId(Guid userId, string accountId)
        {
            var user = _userRepository.FirstOrDefault(_ => _.Id == userId);
            user.SetAccountId(accountId);
            await _unitOfWork.SaveChangeAsync();
        }

        public async Task UpdateUserAvatar(Guid userId, string path)
        {
            var user = _userRepository.FirstOrDefault(_ => _.Id == userId);
            var cloudinaryUrl = await _cloudinaryService.UploadImageAsync(path);
            user.SetImageUrl(cloudinaryUrl);
            await _unitOfWork.SaveChangeAsync();
        }

        public IQueryable<User> GetUserDatas(bool isDisable)
        {
            var user = _userRepository.Find(isDisable != null ? _ => _.IsDisable == isDisable : null);
            return user;
        }

        private string getAccountIdFromToken(HttpContext httpContext)
        {
            var token = DecodeTokenHelper.DecodeToken(httpContext);
            var accountId = token.Claims.FirstOrDefault(_ => _.Type == "nameid").Value;
            return accountId;
        }

        private string getUserRoleFromToken(HttpContext httpContext)
        {
            var token = DecodeTokenHelper.DecodeToken(httpContext);
            var role = token.Claims.FirstOrDefault(_ => _.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/role").Value;
            return role;
        }

        public async Task<BaseResponse> DisableUser(Guid userId)
        {
            var user = _userRepository.FirstOrDefault(_ => _.Id == userId);
            if (user is null) 
                return BaseResponse.Error("User not found");
            if (user.IsDisable == true)
            {
                return BaseResponse.Error("User has been disabled");
            }
            user.DisableUser();
            await _unitOfWork.SaveChangeAsync();
            return BaseResponse.Success();
        }

        public async Task<BaseResponse> EnableUser(Guid userId)
        {
            var user = _userRepository.FirstOrDefault(_ => _.Id == userId);
            if (user is null)
                return BaseResponse.Error("User not found");
            if (user.IsDisable == false)
            {
                return BaseResponse.Error("User has been enabled");
            }
            user.EnableUser();
            await _unitOfWork.SaveChangeAsync();
            return BaseResponse.Success();
        }

        public BaseResponse<UserResponse> GetUserByAccessToken(HttpContext context)
        {
            var accountId = getAccountIdFromToken(context);
            var role = getUserRoleFromToken(context);
            var user = _userRepository.FirstOrDefault(_ => _.AccountId == accountId);
            if (user is null)
            {
                return BaseResponse<UserResponse>.Error("No user found");
            }
            var userResponse = new UserResponse(user);
            userResponse.SetRole(role);
            return BaseResponse<UserResponse>.Success(userResponse);
        }
    }
}
