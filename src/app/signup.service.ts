import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
   baseURL='http://localhost:8083/amazon/customers/save'


  constructor(private httpClient:HttpClient) { }

//Customer Registration
addCustomer(customer?:Customer):Observable<Object>{
  console.log("customer console");
  return this.httpClient.post<object>(`${this.baseURL}`,customer)
}
}
