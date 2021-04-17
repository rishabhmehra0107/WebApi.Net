using EmployeeDirectory.Models;
using PetaPoco;
using System;
using System.Collections.Generic;
using EmployeeDirectory.Contracts;

namespace EmployeeDirectory.Services
{
    public class DesignationServices : IDesignationServices
    {
        IDatabase connection;
        public DesignationServices()
        {
            this.connection = new Database("sqlservice");
        }

        public IList<Designation> GetAllDesignations()
        {
            string query = "SELECT * FROM Designation";
            IList<Designation> designationtList = this.connection.Fetch<Designation>(query);

            return designationtList;
        }
    }
}