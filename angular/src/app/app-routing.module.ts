import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employeedirectory/employee/employee.component';
import { FilterComponent } from './employeedirectory/filter/filter.component';
import { EmployeeformComponent } from './employeedirectory/employeeform/employeeform.component';
import { DepartmentComponent } from './configuration/department/department.component';
import { DesignationsComponent } from './configuration/designations/designations.component';
import { OfficeComponent } from './configuration/office/office.component';
import { ConfigSettingsComponent } from './configuration/config-settings/config-settings.component';
import { HomeComponent } from './employeedirectory/home/home.component';

const routes: Routes = [
  {path:'configuration/department',component:DepartmentComponent},
  {path:'configuration/office',component:OfficeComponent},
  {path:'configuration/designation',component:DesignationsComponent},
  {path:'configuration',component:ConfigSettingsComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: '/home', pathMatch: 'full' },
  {path:'configuration/department/office',redirectTo: '/configuration/office', pathMatch: 'full' },
  {path:'configuration/department/designation',redirectTo: '/configuration/designation', pathMatch: 'full' },
  {path:'configuration/office/department',redirectTo: '/configuration/department', pathMatch: 'full' },
  {path:'configuration/office/designation',redirectTo: '/configuration/designation', pathMatch: 'full' },
  {path:'configuration/designation/department',redirectTo: '/configuration/department', pathMatch: 'full' },
  {path:'configuration/designation/office',redirectTo: '/configuration/office', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }