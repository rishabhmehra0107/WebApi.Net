using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using EmployeeDirectory.Contracts;
using System.Web.Http;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    [RoutePrefix("api/department")]
    public class DepartmentController : ApiController
    {
        public IDepartmentServices _departmentService { get; set; }

        public DepartmentController(IDepartmentServices departmentService)
        {
            this._departmentService = departmentService;
        }

        [HttpGet]
        [Route("AllDepartmentDetails")]
        public IList<Department> GetDepartments()
        {
            return _departmentService.GetAllDepartments();
        }
    }
}