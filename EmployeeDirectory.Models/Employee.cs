﻿using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeDirectory.Models
{
    public class Employee
    {
        [Key] public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string JobTitle { get; set; }

        public string Office { get; set; }

        public string Department { get; set; }

        public string Phone { get; set; }

        public string SkypeId { get; set; }

        public string PreferredName { get; set; }
    }
}
