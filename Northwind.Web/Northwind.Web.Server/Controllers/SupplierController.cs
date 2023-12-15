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
    [Route("api/Supplier")]
    [ApiVersion("2.0")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        readonly NorthwindContext _context;
        public SupplierController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Supplier> Get()
        {
            var data = _context.Suppliers.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Supplier obj)
        {
            var data = _context.Suppliers.Add(obj);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Supplier obj)
        {
            var data = _context.Suppliers.Update(obj);
            _context.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = _context.Suppliers.Where(a => a.SupplierID == id).FirstOrDefault();
            _context.Suppliers.Remove(data);
            _context.SaveChanges();
            return Ok();

        }
    }
}
