import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FilterComponent } from './employeedirectory/filter/filter.component';
import { EmployeeComponent } from './employeedirectory/employee/employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployeeformComponent } from './employeedirectory/employeeform/employeeform.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentComponent } from './configuration/department/department.component';
import { DisplaydepartmentComponent } from './configuration/department/displaydepartment/displaydepartment.component';
import { RouterModule } from '@angular/router';
import { OfficeComponent } from './configuration/office/office.component';
import { DisplayofficeComponent } from './configuration/office/displayoffice/displayoffice.component';
import { DesignationsComponent } from './configuration/designations/designations.component';
import { DisplaydesignationsComponent } from './configuration/designations/displaydesignations/displaydesignations.component';
import { ConfigSettingsComponent } from './configuration/config-settings/config-settings.component';
import { HomeComponent } from './employeedirectory/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FilterComponent,
    EmployeeComponent,
    EmployeeformComponent,
    DepartmentComponent,
    DisplaydepartmentComponent,
    OfficeComponent,
    DisplayofficeComponent,
    DesignationsComponent,
    DisplaydesignationsComponent,
    ConfigSettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
