import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')});
response:any;
    constructor(private loginService: LoginService,public router:Router ,private formBuilder:FormBuilder) { 
      this.form = this.formBuilder.group(
        {
          username: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(20)
            ]
          ],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(40)
            ]
          ],
        },
      );
    }
 
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form.value);
    
        this.loginService.login(this.form.value).subscribe(
          (          data: any) => {
            this.router.navigateByUrl('/coustomerapi')
            console.log(data)
            this.response=data;
            localStorage.setItem('username',this.response.username);
            localStorage.setItem('password',this.response.password);
            localStorage.setItem('login','true')
            console.log(this.response.roles);
            console.log(data)
          },
        );
      }
    }