import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../models/Employee';
import { Designation } from 'src/app/models/Designation';
import { Department } from 'src/app/models/Department';
import { Office } from 'src/app/models/Office';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://127.0.0.1:8080/api";

  constructor(private http:HttpClient) { }

  getDepartmentList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/department/alldepartmentdetails');
  }

  getDesignationList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/designation/alldesignationdetails');
  }

  getOfficeList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/office/allofficedetails');
  }

  getNewId():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/office/allofficedetails');
  }

  deleteEmployee(val){
    return this.http.delete(this.APIUrl+'/employee/'+val);
  }

  addEmployee(employee:Employee){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/employee/insertemployeedetails/',employee, httpOptions);
  }

  addDepartment(department:Department){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/department/create/',department, httpOptions);
  }

  addDesignation(designation:Designation){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/designation/create/',designation, httpOptions);
  }

  addOffice(office:Office){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/office/create/',office, httpOptions);
  }

  updateEmployee(employee:Employee){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/employee/updateemployeedetails/',employee, httpOptions);
  }

  updateDepartment(department:Department){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/department/update/',department, httpOptions);
  }

  updateDesignation(designation:Designation){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/designation/update/',designation, httpOptions);
  }

  updateOffice(office:Office){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/office/update/',office, httpOptions);
  }

  deleteDepartment(val){
    return this.http.delete(this.APIUrl+'/department/'+val);
  }

  deleteDesignation(val){
    return this.http.delete(this.APIUrl+'/designation/'+val);
  }

  deleteOffice(val){
    return this.http.delete(this.APIUrl+'/office/'+val);
  }
}
