using EmployeeDirectory.Models;
using PetaPoco;
using System;
using System.Collections.Generic;
using EmployeeDirectory.Contracts;

namespace EmployeeDirectory.Services
{
    public class EmployeeServices : IEmployeeServices
    {
        IDatabase connection;
        public EmployeeServices()
        {
            this.connection = new Database("sqlservice");
        }
        public IList<Employee> GetAllEmployees()
        {
            string query = "SELECT * FROM Employee";
            IList<Employee> employeeList = this.connection.Fetch<Employee>(query);

            return employeeList;
        }

        public void InsertEmployee(Employee employee)
        {

            this.connection.Insert("Employee","id",false,employee);
        }

        public void UpdateEmployee(Employee employee)
        {
            this.connection.Update("Employee", "id",employee);
        }

        public void DeleteEmployee(int id)
        {
            this.connection.Delete<Employee>(id);
        }
    }
}