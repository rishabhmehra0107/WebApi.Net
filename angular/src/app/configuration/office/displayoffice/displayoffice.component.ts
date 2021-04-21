import { Component, OnInit } from '@angular/core';
import {OfficeService} from 'src/app/office.service';
import { Office } from 'src/app/models/Office';

@Component({
  selector: 'app-displayoffice',
  templateUrl: './displayoffice.component.html',
  styleUrls: ['./displayoffice.component.css']
})
export class DisplayofficeComponent implements OnInit {

  constructor(private service:OfficeService) { }

   officeList=[];
   show:boolean=false;
   activeDesignation:Designation;
   enableEditIndex:number=null;
   enableAdd:boolean=false;
   id:number

  ngOnInit(): void {
    this.getOffices();
  }

  update(location,id){
   this.activeOffice=new Office({});
   this.activeOffice.Id=id;
   this.activeOffice.Location=location;
   this.service.updateOffice(this.activeOffice).subscribe();
   this.show=false;
   alert("Office Updated Successfully!");
 }

 deleteOffice(){
   this.service.deleteOffice(this.id).subscribe();
   alert("Office Removed Successfully!");
   this.getOffices();
 }

 addOffice(location:string){
   this.activeOffice=new Office({});
   this.activeOffice.Location=location;
   this.service.addOffice(this.activeOffice).subscribe();
   alert("Office Added Successfully!");
   this.getOffices();
 }

 enableEditMethod(e, i) {
    this.show = true;
    this.enableEditIndex = i;
  }

  getOffices(){
        this.service.getOfficeList().subscribe(data=>{this.officeList=data;});
        }

}
