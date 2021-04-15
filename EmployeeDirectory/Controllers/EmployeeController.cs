using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using System.Web.Http;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    public class EmployeeController : ApiController
    {

        private readonly IEmployeeServices _employeeRepository = new EmployeeServices();
        IList<Employee> _employees = new List<Employee>();

        public IList<Employee> GetEmployees()
        {
            _employees=_employeeRepository.GetAllEmployees();
            return _employees;
        }

        public IList<Department> GetDepartments()
        {
            return _employeeRepository.GetAllDepartments();
        }

        [HttpPost]
        public void InsertEmployee(Employee employee)
        {
            _employeeRepository.InsertEmployee(employee);
        }
    }
}