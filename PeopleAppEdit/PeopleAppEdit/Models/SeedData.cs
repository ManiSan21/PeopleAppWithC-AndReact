using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace PeopleAppEdit.Models
{
    public class SeedData
    {
        public Person person = new Person();
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PeopleAppContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<PeopleAppContext>>()))
            {
                // Look for any movies.
                if (context.People.Any())
                {
                    return;   // DB has been seeded
                }

                context.People.AddRange(
                    new People
                    {
                        Id = 1,
                        Name = "Mani",
                        LastName = "Sandoval",
                        Age = 23,
                        Gender = true
                    },

                    new People
                    {
                        Id = 2,
                        Name = "Monse",
                        LastName = "Guzmán",
                        Age = 22,
                        Gender = false
                    },

                    new People
                    {
                        Id = 3,
                        Name = "Diego",
                        LastName = "Solorio",
                        Age = 22,
                        Gender = true
                    },

                    new People
                    {
                        Id = 4,
                        Name = "Paulina",
                        LastName = "Rodriguez",
                        Age = 22,
                        Gender = false
                    }
                );
                context.SaveChanges();
            }
        }
    }
}