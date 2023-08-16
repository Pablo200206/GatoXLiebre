using System.ComponentModel.DataAnnotations;

namespace GatoXLiebreApi.Dto
{
    public class UserCreationDto
    {
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        public string Password { get; set; }
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

    }
}
