import { Component, OnInit,Output,Input ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import {EmployeeService} from 'src/app/employee.service';
import { uniqueId } from 'src/app/constants/constant';
import { Router,RouterModule,ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
    employeeForm: FormGroup;
    submitted = false;
    @Output() saveEmployee:EventEmitter<any>= new EventEmitter()
    @Output()  closeForm:EventEmitter<any>= new EventEmitter()
    @Input() employee:Employee;
    employee:Employee;
    newEmployee:Employee;
    employees:Array<Employee>=[];
    constructor(private formBuilder: FormBuilder, private service:EmployeeService,private router: Router,private location: Location,private route: ActivatedRoute) {
    //this.employee=this.router.getCurrentNavigation().extras.state;
     }

    DepartmentList=[];
    DesignationList=[];
    OfficeList=[];

    ngOnInit() {
        this.refreshDepartmentList();
        this.refreshDesignationList();
        this.refreshOfficeList();
        this.employeeForm = this.formBuilder.group({
          id:[this.employee && this.employee.id? this.employee.id:0],
            firstName: [this.employee && this.employee.firstName? this.employee.firstName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            lastName: [this.employee? this.employee.lastName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            email: [this.employee ? this.employee.email:'', [Validators.required, Validators.email]],
            jobTitle: [this.employee? this.employee.jobTitle:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            office: [this.employee? this.employee.office:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            department: [this.employee? this.employee.department:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            phone: [this.employee? this.employee.phone:'', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            skype: [this.employee? this.employee.skype:'', [Validators.required, Validators.email]]
        }, {
        });
        
    }

    get f() { return this.employeeForm.controls; }

    onSave() {
        this.submitted = true;

        if (this.employeeForm.invalid) {
            return;
        }
        /*
        this.newEmployee=this.employeeForm.value;
        this.newEmployee.preferredName=this.newEmployee.firstName+" "+this.newEmployee.lastName;
        let index=this.employees.findIndex(emp=>emp.id==this.newEmployee.id);
        if(index > -1){
        this.employees[index]=this.newEmployee;
        this.service.updateEmployee(this.newEmployee).subscribe();
        }
        else{
        this.employees.push(this.newEmployee);
        this.service.addEmployee(this.newEmployee).subscribe();
        }*/
        
        //this.router.navigate(['/employees'], { state: this.employeeForm.value as Employee });
        this.saveEmployee.emit(this.employeeForm.value as Employee);
    }

    onReset() {
        this.submitted = false;
        this.employeeForm.reset();
        this.closeForm.emit();
        }

    refreshDepartmentList(){
        this.service.getDepartmentList().subscribe(data=>{this.DepartmentList=data;});
        }
    
    refreshDesignationList(){
        this.service.getDesignationList().subscribe(data=>{this.DesignationList=data;});
        }
    
    refreshOfficeList(){
        this.service.getOfficeList().subscribe(data=>{this.OfficeList=data;});
        }
      
    }
