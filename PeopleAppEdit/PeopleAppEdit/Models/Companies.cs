using System;
using System.Collections.Generic;

namespace PeopleAppEdit.Models
{
    public partial class Companies
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
    }
}
