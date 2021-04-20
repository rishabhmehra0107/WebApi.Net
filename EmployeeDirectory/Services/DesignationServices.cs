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

        public void AddDesignation(Designation designation)
        {

            this.connection.Insert("Designation", "Id", true, designation);
        }

        public void UpdateDesignation(Designation designation)
        {
            this.connection.Update("Designation", "Id", designation);
        }

        public void DeleteDesignation(int id)
        {
            this.connection.Delete<Designation>(id);
        }
    }
}