using System;
using System.Collections.Generic;

namespace PeopleAppEdit.Models
{
    public partial class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductUnit { get; set; }
        public decimal Max { get; set; }
        public decimal Min { get; set; }
        public decimal Existence { get; set; }
    }
}
