using System;
using PetaPoco;

namespace EmployeeDirectory.Models
{
    public class Employee
    {
        public int id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }

        public string jobTitle { get; set; }

        public string office { get; set; }

        public string department { get; set; }

        public string phone { get; set; }

        public string skype { get; set; }

        public string preferredName { get; set; }

    }
}
