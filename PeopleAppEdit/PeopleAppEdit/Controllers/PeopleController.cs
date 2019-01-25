using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;
using PeopleAppEdit.Models;
using System.Data.Sql;
using System.Data.SqlClient;

namespace PeopleAppEdit.Controllers
{
    public class PeopleController : ApiController
    {
        PeopleDataAccessLayer objperson = new PeopleDataAccessLayer();

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/People/Index")]
        public IEnumerable<People> Index()
        {
            return objperson.GetAllPeople();
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/People/Create")]
        public int Create(People person)
        {
            return objperson.AddPerson(person);
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/People/Details/{id}")]
        public People Details(int id)
        {
            return objperson.GetPersonData(id);
        }

        [System.Web.Http.HttpPut]
        [System.Web.Http.Route("api/People/Edit")]
        public int Edit(People employee)
        {
            return objperson.UpdatePerson(employee);
        }

        [System.Web.Http.HttpDelete]
        [System.Web.Http.Route("api/People/Delete/{id}")]
        public int Delete(int id)
        {
            return objperson.DeletePerson(id);
        }
    }
}