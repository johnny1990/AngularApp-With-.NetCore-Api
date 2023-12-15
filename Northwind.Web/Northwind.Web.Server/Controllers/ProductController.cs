using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Web.Server.Context;
using Northwind.Web.Server.Models;

namespace Northwind.Web.Server.Controllers
{ 
    [Route("api/Products")]
    [ApiVersion("2.0")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly NorthwindContext _context;
        public ProductController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var data = _context.Products.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product obj)
        {
            var data = _context.Products.Add(obj);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product obj)
        {
            var data = _context.Products.Update(obj);
            _context.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = _context.Products.Where(a => a.ProductID == id).FirstOrDefault();
            _context.Products.Remove(data);
            _context.SaveChanges();
            return Ok();

        }
    }
}
