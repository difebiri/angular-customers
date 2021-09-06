import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../interfaces/loan';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient, private env: EnvService) { }

  getLoans(){
    return this.http.get(this.env.API_URL_L);
  }

  getLoan(id: string){
    return this.http.get(this.env.API_URL_L+'/'+id);
  }

  getLoanByCustomer(id: string){
    return this.http.get(this.env.API_URL_LC+'/'+id);
  }

  createLoan(loan: Loan){
    return this.http.post(this.env.API_URL_L,loan);
  }

  deleteLoan(id:string){
    return this.http.delete(this.env.API_URL_L+'/'+id);
  }

  updateLoan(id:string, updatedLoan:Loan) {
    return this.http.put(this.env.API_URL_L+'/'+id,updatedLoan);
  }
}
