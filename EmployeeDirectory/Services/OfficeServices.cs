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
    }
}