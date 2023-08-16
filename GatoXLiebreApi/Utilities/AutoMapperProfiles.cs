using AutoMapper;
using GatoXLiebreApi.Dto;
using GatoXLiebreApi.Entities;

namespace GatoXLiebreApi.Utilities
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() {
            CreateMap<PetCreationDto, Pet>();
            CreateMap<UserCreationDto, User>();
        }
    }
}
