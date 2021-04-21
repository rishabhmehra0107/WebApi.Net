import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../models/Employee';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly APIUrl="http://127.0.0.1:8080/api";

  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/employee/allemployeedetails');
  }

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

  updateEmployee(employee:Employee){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/employee/updateemployeedetails/',employee, httpOptions);
  }
}
