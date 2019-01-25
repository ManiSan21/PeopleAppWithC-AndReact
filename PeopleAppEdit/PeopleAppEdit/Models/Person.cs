using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PeopleAppEdit.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
    }

    public class personDBContext : DbContext
    {
        public personDBContext()
        {
        }

        public personDBContext(DbContextOptions<personDBContext> options)
            : base(options)
        { }

        public DbSet<Person> Persons { get; set; }        
    }
}
