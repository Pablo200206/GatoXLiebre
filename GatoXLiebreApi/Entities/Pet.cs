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

      
        public string Type { get; set; }

        public string Size { get; set; }

        public string Age { get; set; }
    }
}
