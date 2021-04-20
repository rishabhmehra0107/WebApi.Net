using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using System.Web.Http;
using EmployeeDirectory.Contracts;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    [RoutePrefix("api/designation")]
    public class DesignationController : ApiController
    {
        public IDesignationServices _designationService { get; set; }

        public DesignationController(IDesignationServices designationService)
        {
            this._designationService = designationService;
        }

        [HttpGet]
        [Route("alldesignationdetails")]
        public IList<Designation> GetDesignations()
        {
            return _designationService.GetAllDesignations();
        }

        [HttpPost]
        [Route("create")]
        public void AddDesignation(Designation designation)
        {
            this._designationService.AddDesignation(designation);
        }

        [HttpPut]
        [Route("update")]
        public void UpdateDepartment(Designation designation)
        {
            this._designationService.UpdateDesignation(designation);
        }

        [HttpDelete]
        [Route("delete")]
        public void DeleteDesignation(int id)
        {
            this._designationService.DeleteDesignation(id);
        }
    }
}