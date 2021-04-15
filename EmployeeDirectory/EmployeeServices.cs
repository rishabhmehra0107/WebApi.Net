using EmployeeDirectory.Models;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace EmployeeDirectory
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
            string query = "SELECT * FROM Employees";
            IList<Employee> employeeList = this.connection.Fetch<Employee>(query);

            return employeeList;
        }

        public IList<Department> GetAllDepartments()
        {
            string query = "SELECT * FROM Department";
            IList<Department> departmentList = this.connection.Fetch<Department>(query);

            return departmentList;
        }

        public void InsertEmployee(Employee employee)
        {

            this.connection.Insert("Employees","Id",false,employee);
        }
    }
}