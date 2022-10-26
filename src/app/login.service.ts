import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_Login = "http://localhost:8098/coustomer/login"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: any;
  login(data: any) {
    return this.client.post(API_Login, data);
  }
 
  constructor(public client: HttpClient) {}
}