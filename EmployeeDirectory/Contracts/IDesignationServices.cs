using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IDesignationServices
    {
        IList<Designation> GetAllDesignations();
        void AddDesignation(Designation designation);
        void UpdateDesignation(Designation designation);
        void DeleteDesignation(int id);
    }
}