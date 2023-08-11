import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetInfo } from 'src/app/entities/receive/pet-info';
import { Provincia } from 'src/app/entities/receive/provincia';
import { Animal } from 'src/app/entities/receive/animal';
import { Age } from 'src/app/entities/receive/age';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent {
  @Input() pet: PetInfo;
 
  constructor(){}





}
