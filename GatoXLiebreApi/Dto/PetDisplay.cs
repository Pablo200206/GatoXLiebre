using GatoXLiebreApi.Enum;

namespace GatoXLiebreApi.Dto
{
    public class PetDisplay
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string UserName { get; set; }
        public int UserId { get; set; }

        public Genero Genero { get; set; }

        public Age Age { get; set; }

        public Provincia Provincia { get; set; }

        public int Id { get; set; }
    }
}
