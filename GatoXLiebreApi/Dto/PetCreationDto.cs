using GatoXLiebreApi.Entities;

namespace GatoXLiebreApi.Dto
{
    public class PetCreationDto
    {
        public string Name { get; set; }
        public string Description { get; set; }


        public string Type { get; set; }

        public string Size { get; set; }

        public string Age { get; set; }
    }
}
