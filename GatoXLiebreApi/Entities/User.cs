using Microsoft.EntityFrameworkCore;

namespace GatoXLiebreApi.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string SurName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}
