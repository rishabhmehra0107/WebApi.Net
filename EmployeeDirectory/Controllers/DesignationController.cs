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
        [Route("AllDesignationDetails")]
        public IList<Designation> GetDesignations()
        {
            return _designationService.GetAllDesignations();
        }
    }
}