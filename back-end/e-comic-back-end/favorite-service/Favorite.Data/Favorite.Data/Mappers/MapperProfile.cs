using AutoMapper;
using EventProcessor.Events;
using Favorite.Business.Entities.Favorites;
using Favorite.Data.DTOs.Requests;
using Favorite.Data.DTOs.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Favorite.Data.Mappers
{
    public class MapperProfile : Profile 
    {
        public MapperProfile()
        {
            CreateMap<AddComicToFavoriteRequest, FavoriteEntity>().ReverseMap();
            CreateMap<AddComicToFavoriteEvent, AddComicToFavoriteRequest>().ReverseMap();
            //CreateMap<List<GetFavoriteComicResponse>, List<FavoriteEntity>>().ReverseMap();
        }
    }
}
