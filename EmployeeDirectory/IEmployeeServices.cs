using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace EmployeeDirectory
{
    public interface IEmployeeServices
    {
        IList<Employee> GetAllEmployees();
        IList<Department> GetAllDepartments();
        void InsertEmployee(Employee employee);
    }
}