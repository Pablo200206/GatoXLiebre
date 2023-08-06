import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PetInfo } from 'src/app/entities/receive/pet-info';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  form: FormGroup = new FormGroup({
    animal: new FormControl(''),
    edad: new FormControl(''),
    size: new FormControl(''),
    genero: new FormControl('')
  })
    
  @Output() formEvent = new EventEmitter<any>();
  
  
  onSubmit() {
    this.formEvent.emit(this.form.value);
  }

}
