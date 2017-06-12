using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI.DTOs;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StatsController : ApiController
    {
        private ApplicationDbContext _context = new ApplicationDbContext();

        public IEnumerable<StatsDTO> Get()
        {
            var stats = _context.Database.SqlQuery<StatsDTO>("SELECT Winner AS Name, COUNT(1) Wins FROM Games GROUP BY Winner");

            return stats;
        }
    }
}
