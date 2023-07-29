import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionsPageComponent } from './page/adoptions-page/adoptions-page.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AdoptionsPageComponent,
  ],
  imports: [
    CommonModule,
    PetCardComponent,
    NavbarComponent,
    SearchComponent
  ]
})
export class AdoptionsModule { }
