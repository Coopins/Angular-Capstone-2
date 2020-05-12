using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class JusticeLeagueController : ControllerBase
    {
        private ApplicationDbContext _context;

        public JusticeLeagueController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<JusticeLeagueMember> Get()
        {
           var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

           JusticeLeagueMember[] members = null;
          members = _context.Members.Where(m => m.User.Id == userId).ToArray();

           return members;

        }
        [HttpPost]
        public JusticeLeagueMember Post([FromBody]JusticeLeagueMember member)
        {
            member.UserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
 _context.Members.Add(member);
 _context.SaveChanges();
 return member;
        }
    }
}
