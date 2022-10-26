import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_Register = "http://localhost:8098/coustomer/register/"
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  http: any;
  register(data: any) {
    return this.client.post(API_Register, data);
  }

  constructor(public client: HttpClient) {}
}
