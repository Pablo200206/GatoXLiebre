import { NgModule } from '@angular/core';
import { LoginComponent } from '../../componentes/login/login.component';
import { LoginPageComponent } from './login-page.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { RegisterComponent } from '../../componentes/register/register.component';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    LoginComponent,
    NavbarComponent,
    LoginComponent
  ]
})
export class LoginPageModule { }
