using GatoXLiebreApi.Entities;
using GatoXLiebreApi.Enum;
namespace GatoXLiebreApi.Dto
{
    public class PetCreationDto
    {
        public string Nombre { get; set; }
        public string Description { get; set; }
    
        public Animal Animal { get; set; }

        public Age Age { get; set; }

        public Provincia Provincia { get; set; }

        public Genero Genero { get; set; }
    }
}
