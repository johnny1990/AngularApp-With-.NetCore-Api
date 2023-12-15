using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Northwind.Web.Server.Models
{
    public class Region
    {
        [Key]
        public int RegionID { get; set; }
        public string RegionDescription { get; set; }
    }
}
