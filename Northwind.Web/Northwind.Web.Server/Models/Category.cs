using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Northwind.Web.Server.Models
{
    

    public class Category
    {

        [Key]
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
    
        public virtual ICollection<Product> Products { get; set; }
    }
}
