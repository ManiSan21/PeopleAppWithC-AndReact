using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PeopleAppEdit.Models
{
    public class PeopleDataAccessLayer
    {
        PeopleAppContext db = new PeopleAppContext();

        public object Database { get; internal set; }

        public IEnumerable<People> GetAllPeople()
        {
            try
            {
                return db.People.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddPerson(People person)
        {
            try
            {
                db.People.Add(person);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdatePerson(People person)
        {
            try
            {
                db.Entry(person).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public People GetPersonData(int id)
        {
            try
            {
                People person = db.People.Find(id);
                return person;
            }
            catch
            {
                throw;
            }
        }

        public int DeletePerson(int id)
        {
            try
            {
                People per = db.People.Find(id);
                db.People.Remove(per);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
