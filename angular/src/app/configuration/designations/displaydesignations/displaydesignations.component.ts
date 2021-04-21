import { Component, OnInit } from '@angular/core';
import {DesignationService} from 'src/app/designation.service';
import { Designation } from 'src/app/models/Designation';

@Component({
  selector: 'app-displaydesignations',
  templateUrl: './displaydesignations.component.html',
  styleUrls: ['./displaydesignations.component.css']
})
export class DisplaydesignationsComponent implements OnInit {

  constructor(private service:DesignationService) { }

   designationList=[];
   show:boolean=false;
   activeDesignation:Designation;
   enableEditIndex:number=null;
   enableAdd:boolean=false;
   id:number;

  ngOnInit(): void {
    this.getDesignations();
  }

  update(title,id){
   this.activeDesignation=new Designation({});
   this.activeDesignation.Id=id;
   this.activeDesignation.Title=title;
   this.service.updateDesignation(this.activeDesignation).subscribe();
   this.show=false;
   alert("Designation Updated Successfully!");
 }

 deleteDesignation(){
   this.service.deleteDesignation(this.id).subscribe();
   alert("Designation Removed Successfully!");
   this.getDesignations();
 }

 addDesignation(title:string){
   this.activeDesignation=new Designation({});
   this.activeDesignation.Title=title;
   this.service.addDesignation(this.activeDesignation).subscribe();
   alert("Designation Added Successfully!");
   this.getDesignations();
 }

 enableEditMethod(e, i) {
    this.show = true;
    this.enableEditIndex = i;
  }

  getDesignations(){
        this.service.getDesignationList().subscribe(data=>{this.designationList=data;});
        }
}
