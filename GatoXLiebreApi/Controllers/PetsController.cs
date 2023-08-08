using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GatoXLiebreApi;
using GatoXLiebreApi.Entities;
using GatoXLiebreApi.Utilities;
using GatoXLiebreApi.Dto;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.Security.Claims;

namespace GatoXLiebreApi.Controllers
{
    [ApiController]
    [Route("api/pets")]
    public class PetsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public PetsController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("getPets/{page}")]
        public async Task<ActionResult<List<PetSenderDto>>> getPets([FromRoute] int page, [FromBody] SearchParameters search)
        {
            var pets = await _context.Pets.Select(x =>
            new PetSenderDto
            {
                Name = x.Name,
                Age = x.Age,
                Size = x.Size,
                Type = x.Type
            }).Skip((page - 1) * 10).Take(10).ToListAsync();

            if (pets == null)
            {
                return NoContent();
            }

            return pets;
        }


        [HttpPost("addPet")]
        [Authorize]
        public async Task<ActionResult<Pet>> getPets(PetCreationDto entity)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var pet = _mapper.Map<PetCreationDto, Pet>(entity);
            pet.UserId = userId;

            await _context.Pets.AddAsync(pet);
            await _context.SaveChangesAsync();

            return CreatedAtRoute("getPet", pet.Id, pet);
        }


        [HttpGet("getPet/{id}", Name = "getPet")]
        public async Task<ActionResult<PetDisplay>> getPet([FromRoute] int id)
        {
            var pet = await _context.Pets.Select(x => new PetDisplay
            {
                Name = x.Name,
                Age = x.Age,
                Size = x.Size,
                UserId = x.UserId,
                UserName = x.User.Name,
                Id = x.Id
            })
            .FirstOrDefaultAsync(x => x.Id == id);
            if (pet == null) { return NotFound(); }
            return Ok(pet);
        }



    }
}