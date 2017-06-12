using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI.DTOs;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GamesController : ApiController
    {
        private ApplicationDbContext _context = new ApplicationDbContext();

        public async Task<IHttpActionResult> Post(NewGameDTO gameDto)
        {
            if (gameDto == null)
            {
                return BadRequest("Argument Null");
            }

            var game = new Game()
            {
                Winner = gameDto.Winner
            };

            _context.Games.Add(game);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
