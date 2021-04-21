import { Component, OnInit } from '@angular/core';
import {DepartmentService} from 'src/app/department.service';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-displaydepartment',
  templateUrl: './displaydepartment.component.html',
  styleUrls: ['./displaydepartment.component.css']
})
export class DisplaydepartmentComponent implements OnInit {

  constructor(private service:DepartmentService) { }

  departmentList=[];
  show:boolean=false;
  enableAdd:boolean=false;
  activeDepartment:Department;
  enableEditIndex:number = null;
  id:number;

  ngOnInit(): void {
    this.getDepartments();
  }

 update(name:string,id:number){
   this.activeDepartment=new Department({});
   this.activeDepartment.Id=id;
   this.activeDepartment.Name=name;
   
   this.service.updateDepartment(this.activeDepartment).subscribe();
   this.show=false;
   alert("Department Updated Successfully!");
 }

 deleteDep(){
   this.service.deleteDepartment(this.id).subscribe();
   alert("Department Removed Successfully!");
   this.getDepartments();
 }

 addDepartment(name:string){
   this.activeDepartment=new Department({});
   this.activeDepartment.Name=name;
   this.service.addDepartment(this.activeDepartment).subscribe();
   alert("Department Added Successfully!");
   this.getDepartments();
 }

 enableEditMethod(e, i) {
    this.show = true;
    this.enableEditIndex = i;
  }

  getDepartments(){
        this.service.getDepartmentList().subscribe(data=>{this.departmentList=data;});
        }

}
