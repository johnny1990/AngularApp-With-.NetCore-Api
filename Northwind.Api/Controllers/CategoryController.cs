using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Api.Models;

namespace Northwind.Api.Controllers
{
    [Route("api/Categories")]
    [ApiVersion("2.0")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        readonly NorthwindContext _context;
        public CategoryController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            var data = _context.Categories.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Category obj)
        {
            var data = _context.Categories.Add(obj);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category obj)
        {
            var data = _context.Categories.Update(obj);
            _context.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = _context.Categories.Where(a => a.CategoryID == id).FirstOrDefault();
            _context.Categories.Remove(data);
            _context.SaveChanges();
            return Ok();

        }
    }
}
