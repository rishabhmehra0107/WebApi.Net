import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Designation } from 'src/app/models/Designation';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  readonly APIUrl="http://127.0.0.1:8080/api";

  constructor(private http:HttpClient) { }

  getDesignationList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/designation/alldesignationdetails');
  }

  addDesignation(designation:Designation){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/designation/create/',designation, httpOptions);
  }

  updateDesignation(designation:Designation){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/designation/update/',designation, httpOptions);
  }

  deleteDesignation(val){
    return this.http.delete(this.APIUrl+'/designation/'+val);
  }
}
