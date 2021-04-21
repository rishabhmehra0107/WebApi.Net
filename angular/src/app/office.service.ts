import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Office } from 'src/app/models/Office';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  readonly APIUrl="http://127.0.0.1:8080/api";

  constructor(private http:HttpClient) { }

  getOfficeList():Observable<string[]>{
    return this.http.get<string>(this.APIUrl+'/office/allofficedetails');
  }

  addOffice(office:Office){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post(this.APIUrl + '/office/create/',office, httpOptions);
  }

  updateOffice(office:Office){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put(this.APIUrl + '/office/update/',office, httpOptions);
  }

  deleteOffice(val){
    return this.http.delete(this.APIUrl+'/office/'+val);
  }
}
