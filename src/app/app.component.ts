import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
signin:any;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.signin = localStorage.getItem('signin');
    

    
  }


}

