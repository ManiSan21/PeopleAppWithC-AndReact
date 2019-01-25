using System;
using System.Collections.Generic;

namespace PeopleAppEdit.Models
{
    public partial class People
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
    }
}
