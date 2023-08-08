using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GatoXLiebreApi;
using GatoXLiebreApi.Entities;
using AutoMapper;
using GatoXLiebreApi.Dto;

namespace GatoXLiebreApi.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UsersController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("getAll/{page}")]
        public async Task<ActionResult<List<UserDisplay>>> getUsers([FromRoute] int pageNumber)
        {
           var users = await _context.Users.Select( x=> new UserDisplay
            {
                Id = x.Id,
                Name = x.Name,
            }).Skip((pageNumber-1)*10).Take(10).
            ToListAsync();

            return Ok(users);
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult<UserDisplay>> getUser([FromRoute] int id)
        {
            var user = await _context.Users.Select(x=>
          new UserDisplay  {
                Name = x.Name,
                Id = x.Id
            }).SingleOrDefaultAsync( x => x.Id == id );

            if (user == null) { return NotFound(); }

            return Ok(user);
        }

        [HttpGet("getPets/{id}")]
        public async Task<ActionResult<PetSenderDto>> getPetsFromUser([FromRoute] int id)
        {
            var pets = await _context.Pets.Select( x=> new PetSenderDto
            {
                Name = x.Name,
                Age = x.Age,
                Size = x.Size,
                Type = x.Type,
                UserId = x.UserId

            }).Where(x=> x.UserId == id).ToListAsync();

            return Ok(pets);
        }

    }
}
