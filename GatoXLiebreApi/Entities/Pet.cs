using GatoXLiebreApi.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace GatoXLiebreApi.Entities
{
    public class Pet
    {


        [ForeignKey("User")]

        public int UserId { get; set; }

        public User User { get; set; }  
       
        
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Genero Genero { get; set; }

        public Age Age { get; set; }

        public Provincia Provincia { get; set; }

    }
}
