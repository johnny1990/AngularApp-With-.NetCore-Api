using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Api.Models;

namespace Northwind.Api.Controllers
{
    [Route("api/Customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        readonly NorthwindContext _context;
        public CustomerController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            var data = _context.Customers.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer obj)
        {
            var data = _context.Customers.Add(obj);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Customer obj)
        {
            var data = _context.Customers.Update(obj);
            _context.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = _context.Customers.Where(a => a.CustomerID == id.ToString()).FirstOrDefault();
            _context.Customers.Remove(data);
            _context.SaveChanges();
            return Ok();
        }
    }
}
