using GatoXLiebreApi.Enum;

namespace GatoXLiebreApi.Dto
{
    public class PetSenderDto
    {
        public string Name { get; set; }

        public Age Age { get; set; }

        public Genero Genero { get; set; }

        public Provincia Provincia { get; set; }
        
        public int Id { get; set; }
        public int UserId { get;  set; }
    }
}
