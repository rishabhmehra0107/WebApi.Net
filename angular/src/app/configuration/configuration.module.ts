import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigSettingsComponent } from './config-settings/config-settings.component';
import { DepartmentComponent } from './department/department.component';
import { DisplaydepartmentComponent } from './department/displaydepartment/displaydepartment.component';
import { OfficeComponent } from './office/office.component';
import { DisplayofficeComponent } from './office/displayoffice/displayoffice.component';
import { DesignationsComponent } from './designations/designations.component';
import { DisplaydesignationsComponent } from './designations/displaydesignations/displaydesignations.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ConfigSettingsComponent,
    DepartmentComponent,
    DisplaydepartmentComponent,
    OfficeComponent,
    DisplayofficeComponent,
    DesignationsComponent,
    DisplaydesignationsComponent
  ]
})
export class ConfigurationModule { }
