using System;
using System.Collections.Generic;
using EmployeeDirectory.Models;
using System.Web.Http;
using EmployeeDirectory.Contracts;
using PetaPoco;

namespace EmployeeDirectory.Controllers
{
    [RoutePrefix("api/office")]
    public class OfficeController : ApiController
    {
        public IOfficeServices _officeService { get; set; }

        public OfficeController(IOfficeServices officeServices)
        {
            this._officeService = officeServices;
        }

        [HttpGet]
        [Route("AllOfficeDetails")]
        public IList<Office> GetOffices()
        {
            return _officeService.GetAllOffices();
        }
    }
}
