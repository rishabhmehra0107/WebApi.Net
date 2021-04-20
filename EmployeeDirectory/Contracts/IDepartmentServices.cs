using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IDepartmentServices
    {
        IList<Department> GetAllDepartments();
        void AddDepartment(Department department);
        void UpdateDepartment(Department department);
        void DeleteDepartment(int id);
    }
}