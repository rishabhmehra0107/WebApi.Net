import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    FilterComponent,
    EmployeeComponent,
    EmployeeformComponent
  ]
})
export class EmployeedirectoryModule { }
