using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Northwind.Web.Server.Models
{
    public class CustomerDemographic
    {
        [Key]
        public string CustomerTypeID { get; set; }
        public string CustomerDesc { get; set; }
    }
}
