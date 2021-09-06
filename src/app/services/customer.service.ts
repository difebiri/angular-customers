import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient, private env: EnvService) { }

  getCustomers(){
    return this.http.get(this.env.API_URL_c);
  }

  getCustomer(id: string){
    return this.http.get(this.env.API_URL_c+'/'+id);
  }

  createCustomer(customer: Customer){
    return this.http.post(this.env.API_URL_c,customer);
  }

  deleteCustomer(id:string){
    return this.http.delete(this.env.API_URL_c+'/'+id);
  }

  updateCustomer(id:string, updatedCustomer:Customer) {
    return this.http.put(this.env.API_URL_c+'/'+id,updatedCustomer);
  }
}
