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
        [Route("alldepartmentdetails")]
        public IList<Department> GetDepartments()
        {
            return _departmentService.GetAllDepartments();
        }

        [HttpPost]
        [Route("create")]
        public void AddDepartment(Department department)
        {
            this._departmentService.AddDepartment(department);
        }

        [HttpPut]
        [Route("update")]
        public void UpdateDepartment(Department department)
        {
            this._departmentService.UpdateDepartment(department);
        }

        [HttpDelete]
        [Route("delete")]
        public void DeleteDepartment(int id)
        {
            this._departmentService.DeleteDepartment(id);
        }
    }
}