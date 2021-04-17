using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IEmployeeServices
    {
        IList<Employee> GetAllEmployees();
        void InsertEmployee(Employee employee);
        void UpdateEmployee(Employee employee);
        void DeleteEmployee(int id);
    }
}