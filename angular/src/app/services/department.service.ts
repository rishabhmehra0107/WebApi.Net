import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Department } from 'src/app/models/Department';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly APIUrl="http://127.0.0.1:8080/api";

  constructor(private http:HttpClient) { }

  getDepartmentList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/department/alldepartmentdetails');
  }

  addDepartment(department:Department){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/department/create/',department, httpOptions);
  }

  updateDepartment(department:Department){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/department/update/',department, httpOptions);
  }

  deleteDepartment(val){
    return this.http.delete(this.APIUrl+'/department/'+val);
  }
}
