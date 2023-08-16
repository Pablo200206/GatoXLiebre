import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddPetPageComponent } from './add-pet-page.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AddPetPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    NavbarComponent,
    ReactiveFormsModule
  ]
})
export class AddPetPageModule { 
 
}
