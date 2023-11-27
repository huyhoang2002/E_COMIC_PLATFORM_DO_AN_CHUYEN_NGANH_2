using AutoMapper;
using Favorite.Business.Entities.Favorites;
using Favorite.Data.DTOs.Requests;
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
        }
    }
}
