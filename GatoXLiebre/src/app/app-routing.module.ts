import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsPageComponent } from './adoptions/page/adoptions-page/adoptions-page.component';
import { AddPetPageComponent } from './add-pet/page/add-pet-page/add-pet-page.component';
import { LoginPageComponent } from './authentification/page/login-page/login-page.component';
import { RegisterPageComponent } from './authentification/page/register-page/register-page/register-page.component';

const routes: Routes = [{
  component: AdoptionsPageComponent,
  path: 'adoptions'
},
  {
    component: AddPetPageComponent,
    path: 'add-pet'
  },
  {
    component: RegisterPageComponent,
    path: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
