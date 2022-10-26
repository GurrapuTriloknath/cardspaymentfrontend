import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_Coustomer = "http://localhost:8098/coustomer/coustomerapi/"

@Injectable({
  providedIn: 'root'
})
export class CoustomerdetailsService {

  http: any;
  coustomer(data: any) {
    return this.client.post(API_Coustomer, data);
  }

  constructor(public client: HttpClient) {}
}