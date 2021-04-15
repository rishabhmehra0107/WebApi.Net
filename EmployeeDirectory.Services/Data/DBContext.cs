using System;
using EmployeeDirectory.Models;
using Microsoft.EntityFrameworkCore;
namespace EmployeeDirectory.Services.Data
{
    public class DBContext : DbContext
    {
        private const string connectionString = "Server=localhost,1401;Database=EmployeeApp;User= sa;Password=omsairam@1234;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Employee> Employees { get; set; }
    }
}