using AutoMapper;
using User_API.Entities;
using User_API.Repository.repositories.Interfaces;
using User_API.Services.Interfaces;
using User_API.UnitOfWork.Interfaces;
using User_API.ViewModels.Requests;

namespace User_API.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        public UserService(IUserRepository userRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<Guid> CreateUser(CreateUserRequest request)
        {
            var user = _mapper.Map<User>(request);
            await _userRepository.AddAsync(user);
            await _unitOfWork.SaveChangeAsync();
            return user.Id;
        }

        public async Task UpdateAccountId(Guid userId, string accountId)
        {
            var user = _userRepository.FirstOrDefault(_ => _.Id == userId);
            user.SetAccountId(accountId);
            await _unitOfWork.SaveChangeAsync();
        }
    }
}
