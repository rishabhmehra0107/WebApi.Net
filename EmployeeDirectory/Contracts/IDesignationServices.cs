using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IDesignationServices
    {
        IList<Designation> GetAllDesignations();
    }
}