import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPetPageModule } from './add-pet-page.module';
@Component({
  selector: 'app-add-pet-page',
  templateUrl: './add-pet-page.component.html',
  styleUrls: ['./add-pet-page.component.css']
})
export class AddPetPageComponent {

animal =  new FormGroup({
  descripcion: new FormControl('', Validators.required),
  nombre: new FormControl('', Validators.required),
  provincia: new FormControl('', Validators.required),
  animal: new FormControl('', Validators.required),
  edad: new FormControl('', Validators.required)
})

  
  clickHandler() {
    const values = this.animal.value;


  }
  
  
}
