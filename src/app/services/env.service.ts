import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL_c = 'https://localhost:44384/api/customers';
  API_URL_L ='https://localhost:44384/api/loan';
  API_URL_LC = 'https://localhost:44384/api/loansbycustomer'

  constructor() { }
}
