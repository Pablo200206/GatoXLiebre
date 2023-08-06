using GatoXLiebreApi.Entities;
using Microsoft.EntityFrameworkCore;


namespace GatoXLiebreApi
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Pet> Pets { get; set; }
    }
}
