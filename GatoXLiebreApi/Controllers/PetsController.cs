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

namespace GatoXLiebreApi.Controllers
{
    [ApiController]
    [Route("api/pets")]
    public class PetsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PetsController(AppDbContext context)
        {
            _context = context;
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
            }).Skip(page * 10).Take(10).ToListAsync();

            if (pets == null)
            {
                return NoContent();
            }

            return pets;
        }

    }
}