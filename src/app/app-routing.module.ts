import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoustomerdetailsComponent } from './coustomerdetails/coustomerdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home' , pathMatch:'full'
  },
{ path:'login', component: LoginComponent},
{ path:'register', component: RegisterComponent},
{ path:'coustomer', component: CoustomerdetailsComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
