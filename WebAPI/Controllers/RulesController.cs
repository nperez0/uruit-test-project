using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class RulesController : ApiController
    {
        private ApplicationDbContext _context = new ApplicationDbContext();

        public IEnumerable<RuleDTO> Get()
        {
            var rules = _context.Rules.ToList();

            return Mapper.Map<List<Rule>, List<RuleDTO>>(rules);
        }

        public async Task<IHttpActionResult> Post(NewRuleDTO ruleDto)
        {
            if (ruleDto == null)
            {
                return BadRequest("Argument Null");
            }

            var rule = new Rule()
            {
                Move = ruleDto.Move,
                Kills = ruleDto.Kills
            };

            _context.Rules.Add(rule);

            await _context.SaveChangesAsync();

            return Ok();
        }

        public async Task<IHttpActionResult> Delete(int id)
        {
            var rule = await _context.Rules.FirstOrDefaultAsync(r => r.Id == id);

            if (rule == null)
            {
                return NotFound();
            }

            _context.Rules.Remove(rule);

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
