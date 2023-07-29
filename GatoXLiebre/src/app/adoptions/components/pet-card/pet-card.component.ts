import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetInfo } from 'src/app/entities/receive/pet-info';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent {
  @Input() petList: PetInfo[];
}
