import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { EmployeeLetters } from 'src/app/constants/constant';
import {displayUniqueFilters} from 'src/app/utilities/utility';
import { Employee } from 'src/app/models/Employee';
import { EmployeeFilter, Filter, SelectedFilters } from 'src/app/models/EmployeeFilter';
import { from } from 'rxjs';
import {EmployeeService} from 'src/app/employee.service';
import { Router,RouterModule,ActivatedRoute,NavigationEnd } from '@angular/router';
import {Location} from '@angular/common';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees: Array<Employee> = [];
  employeeFilters:EmployeeFilter = new EmployeeFilter({});
  filteredEmployees=[];
  letters = EmployeeLetters;
  activeEmployee:Employee;
  selectedFilters:SelectedFilters=new  SelectedFilters({});display="none";

  constructor(private service:EmployeeService,private router: Router, private location: Location,private route: ActivatedRoute) {
   /* router.events.pipe(
    filter(event => event instanceof NavigationEnd)
)
    .subscribe(event => {
        this.route=event;
    });*/
   }

closeForm(){
  this.activeEmployee=null;
}

saveEmployee(employee:Employee) { 
  employee.preferredName=employee.firstName+" "+employee.lastName;
  let index=this.employees.findIndex(emp=>emp.id==employee.id);
  if(index > -1){
    this.employees[index]=employee;
    this.service.updateEmployee(employee).subscribe();
  }
  else{
    this.employees.push(employee);
    this.service.addEmployee(employee).subscribe();
  }
  this.filterEmployees(this.selectedFilters);
    this.getFilters();
    this.closeForm();
 }

 /*
saveEmployee(employee:Array<Employee>) { 
  this.employees=employee;
  this.filterEmployees(this.selectedFilters);
    this.getFilters();
    this.closeForm();
 }*/

 getFilters(){
  this.employeeFilters.departments=this.employees.map(employee => new Filter({ value: employee.department, count:this.employees.filter(cnt => cnt.department == employee.department).length}));
  this.employeeFilters.departments=displayUniqueFilters(this.employeeFilters.departments);
  this.employeeFilters.offices=this.employees.map(employee => new Filter({ value: employee.office, count:this.employees.filter(cnt => cnt.office == employee.office).length}));
  this.employeeFilters.offices=displayUniqueFilters(this.employeeFilters.offices);
  this.employeeFilters.jobTitles=this.employees.map(employee => new Filter({ value: employee.jobTitle, count:this.employees.filter(cnt => cnt.jobTitle == employee.jobTitle).length}));
  this.employeeFilters.jobTitles=displayUniqueFilters(this.employeeFilters.jobTitles);
 }

searchByletter(input:string){
  input=input.toLowerCase();
  this.filteredEmployees = this.employees.filter(employee => {      return ((employee.firstName.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='First Name')||(employee.lastName.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Last Name')||(employee.email.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Email')||(employee.jobTitle.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Job Title')||(employee.office.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Office')||(employee.department.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Department')||(employee.preferredName.toLowerCase().charAt(0) == input && this.selectedFilters.selectedDropdownFilter=='Preferred Name'))   }); 
}

filterEmployees(selectedFilters:SelectedFilters){
  this.filteredEmployees=this.employees.filter(employee=>{
    return (selectedFilters.selectedLeftFilter==employee.department?employee
      :(selectedFilters.selectedLeftFilter==employee.office?employee
        :(selectedFilters.selectedLeftFilter==employee.jobTitle?employee : '') ) )
      ||(employee.firstName.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='First Name')||(employee.lastName.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase())&& selectedFilters.selectedDropdownFilter=='Last Name')||(employee.email.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='Email')||(employee.jobTitle.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='Job Title')||(employee.office.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='Office')||(employee.department.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='Department')||(employee.preferredName.toLowerCase().includes(selectedFilters.searchedInput.toLowerCase()) && selectedFilters.selectedDropdownFilter=='Preferred Name')
  });
}


clearData(){
  this.getFilters();
  this.selectedFilters= new SelectedFilters({});
  this.filteredEmployees=this.employees;
}

openEmployee(employee:Employee){
  this.activeEmployee=employee;
  this.activeEmployee = !!this.activeEmployee ? this.activeEmployee : new Employee({id:this.employees.length+1});
  /*
  if(!!employee)
  this.router.navigate(['/employees/update',employee.id]);
  else
  this.router.navigate(['/employees/add'] , { state: this.activeEmployee });
  */
}
deleteEmployee(employee:Employee){
  this.activeEmployee=null;
    this.employees=this.employees.filter(emp=>{if(emp.id!=employee.id){return emp;}});
    this.filteredEmployees=this.employees;
    this.getFilters();
    this.service.deleteEmployee(employee.id).subscribe();
}

noEmployeePresent(){
  if(this.employees.length==0){
    return true;
  }
}

  ngOnInit()  {
    this.service.getEmployeeList().subscribe(data=>{this.employees=data;});
  }
}