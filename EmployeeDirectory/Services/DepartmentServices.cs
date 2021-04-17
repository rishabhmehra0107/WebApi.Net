using EmployeeDirectory.Models;
using EmployeeDirectory.Contracts;
using PetaPoco;
using System.Collections.Generic;

namespace EmployeeDirectory.Services
{
    public class DepartmentServices : IDepartmentServices
    {
        IDatabase connection;
        public DepartmentServices()
        {
            this.connection = new Database("sqlservice");
        }

        public IList<Department> GetAllDepartments()
        {
            string query = "SELECT * FROM Department";
            IList<Department> departmentList = this.connection.Fetch<Department>(query);

            return departmentList;
        }
    }
}