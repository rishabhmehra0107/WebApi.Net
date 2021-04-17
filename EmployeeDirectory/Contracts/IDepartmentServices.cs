using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IDepartmentServices
    {
        IList<Department> GetAllDepartments();
    }
}