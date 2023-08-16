import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { RegisterComponent } from 'src/app/authentification/componentes/register/register.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';



@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterComponent,
    NavbarComponent,
    RegisterComponent
  ]
})
export class RegisterModule { }
