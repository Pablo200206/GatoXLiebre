using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GatoXLiebreApi;
using GatoXLiebreApi.Entities;
using GatoXLiebreApi.Dto;
using System.Security.Cryptography;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace GatoXLiebreApi.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
           _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> register(UserCreationDto entity)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == entity.Email);

            if(user != null) {
                return Conflict("Email ya en uso");
                    };

            CreatePasswordHash(entity.Password, out byte[] hash, out byte[] salt);

            user.Email = entity.Email;
            user.Name = entity.Name;
            user.SurName = entity.Surname;
            user.PasswordHash = hash;
            user.PasswordSalt = salt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserCreationDto entity)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == entity.Email);

            if (user == null)
            {
                return Conflict("Este correo no esta registrado en nuestros sistemas");
            };

            if(!VerifyPasswordHash(user, entity.Password))
            {
                return BadRequest("Contraseña Incorrecta");
            }

            string token = CreateToken(user);

            return token;
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Name)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("settings:secretKey").Value));


            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds
                );
 

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);


            return jwt;
        }

        private Boolean VerifyPasswordHash(User user, string password) 
        { 
           using (var hmac = new HMACSHA512(user.PasswordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.Equals(user.PasswordHash); ;
            }


        }



        private void CreatePasswordHash(string password, out byte[] hash, out byte[] salt)
        {
            using(var hmac = new HMACSHA512())
            {
                salt = hmac.Key;
                hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }



        }

    }

}
