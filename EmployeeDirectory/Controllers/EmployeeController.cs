using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using System.Web.Http;
using EmployeeDirectory.Contracts;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    [RoutePrefix("api/employee")]
    public class EmployeeController : ApiController
    {
        public IEmployeeServices _employeeService { get; set; }

        public EmployeeController(IEmployeeServices employeeService)
        {
            this._employeeService = employeeService;
        }

        [HttpGet]
        [Route("allemployeedetails")]
        public IList<Employee> GetEmployees()
        {
            return this._employeeService.GetAllEmployees();
        }


        [HttpPost]
        [Route("insertemployeedetails")]
        public void InsertEmployee(Employee employee)
        {
            this._employeeService.InsertEmployee(employee);
        }

        [HttpPut]
        [Route("updateemployeedetails")]
        public void UpdateEmployee(Employee employee)
        {
            this._employeeService.UpdateEmployee(employee);
        }

        [HttpDelete]
        [Route("deleteemployeedetails")]
        public void DeleteEmployee(int id)
        {
            this._employeeService.DeleteEmployee(id);
        }
    }
}