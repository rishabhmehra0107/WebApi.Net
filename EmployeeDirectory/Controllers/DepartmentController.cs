using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using System.Web.Http;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    public class DepartmentController : ApiController
    {

        private readonly IEmployeeServices _employeeRepository = new EmployeeServices();
        public IList<Department> GetDepartments()
        {
            return _employeeRepository.GetAllDepartments();
        }
    }
}