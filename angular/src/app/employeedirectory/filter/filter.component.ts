import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {AppComponent} from '../app.component';
import { EmployeeFilter ,SelectedFilters} from 'src/app/models/EmployeeFilter';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() public employeeFilter:EmployeeFilter;
  @Input() public selectedFilter:SelectedFilters;
  @Output() filterEmployees:EventEmitter<any>= new EventEmitter()
  viewMore:boolean=true;
  view:boolean=false;
  constructor() {}

  enableView(type:string){
    if(type=='department'){
      if(this.employeeFilter.departments.length>2){
        return true;
      }
      return false;
    }
    else if(type=='office'){
      if(this.employeeFilter.offices.length>2){
        return true;
      }
      return false;
    }
    else{
      if(this.employeeFilter.jobTitles.length>2){
        return true;
      }
      return false;
    }
  }

  filter(value:string){
    this.selectedFilter.selectedLeftFilter=value;
    this.filterEmployees.emit(this.selectedFilter);
  }

  ngOnInit(): void {
  }
}
