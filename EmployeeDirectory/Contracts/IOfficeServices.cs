using System;
using EmployeeDirectory.Models;
using System.Collections.Generic;
namespace EmployeeDirectory.Contracts
{
    public interface IOfficeServices
    {
        IList<Office> GetAllOffices();
        void AddOffice(Office office);
        void UpdateOffice(Office office);
        void DeleteOffice(int id);
    }
}