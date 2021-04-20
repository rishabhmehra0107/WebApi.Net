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
        [Route("allofficedetails")]
        public IList<Office> GetOffices()
        {
            return _officeService.GetAllOffices();
        }

        [HttpPost]
        [Route("create")]
        public void AddOffice(Office office)
        {
            this._officeService.AddOffice(office);
        }

        [HttpPut]
        [Route("update")]
        public void UpdateOffice(Office office)
        {
            this._officeService.UpdateOffice(office);
        }

        [HttpDelete]
        [Route("delete")]
        public void DeleteOffice(int id)
        {
            this._officeService.DeleteOffice(id);
        }
    }
}
