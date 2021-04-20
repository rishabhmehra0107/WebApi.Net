using EmployeeDirectory.Models;
using PetaPoco;
using System;
using System.Collections.Generic;
using EmployeeDirectory.Contracts;

namespace EmployeeDirectory.Services
{
    public class OfficeServices : IOfficeServices
    {
        IDatabase connection;
        public OfficeServices()
        {
            this.connection = new Database("sqlservice");
        }

        public IList<Office> GetAllOffices()
        {
            string query = "SELECT * FROM Office";
            IList<Office> officeList = this.connection.Fetch<Office>(query);

            return officeList;
        }

        public void AddOffice(Office office)
        {

            this.connection.Insert("Office", "Id", true, office);
        }

        public void UpdateOffice(Office office)
        {
            this.connection.Update("Office", "Id", office);
        }

        public void DeleteOffice(int id)
        {
            this.connection.Delete<Office>(id);
        }
    }
}