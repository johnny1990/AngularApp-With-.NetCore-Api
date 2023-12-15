using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Northwind.Web.Server.Models
{
    public class Territory
    {
        [Key]
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }
        public int RegionID { get; set; }
    
        public virtual Region Region { get; set; }
    }
}
