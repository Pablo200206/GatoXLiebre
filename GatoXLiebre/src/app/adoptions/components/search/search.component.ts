import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Provincia, Provincia2StringMapper } from 'src/app/entities/receive/provincia';
import { MatInputModule } from '@angular/material/input';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Animal } from 'src/app/entities/receive/animal';
import { Animal2Label } from '../../../entities/receive/animal';
import { Age, Age2Label } from 'src/app/entities/receive/age';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public provincias = Object.values(Provincia);
  public Type2Label = Provincia2StringMapper;

  public animales = Object.values(Animal);
  public animal2Label = Animal2Label

  public ages = Object.values(Age);
  public age2Label = Age2Label;
  }

