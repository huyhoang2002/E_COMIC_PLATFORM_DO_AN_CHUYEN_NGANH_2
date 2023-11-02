using AutoMapper;
using User_API.Entities;
using User_API.ViewModels.Requests;

namespace User_API.Mapper
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<User, CreateUserRequest>().ReverseMap();
        }
    }
}
