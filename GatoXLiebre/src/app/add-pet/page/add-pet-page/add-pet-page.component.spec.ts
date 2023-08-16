import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetPageComponent } from './add-pet-page.component';
import {ThemePalette} from '@angular/material/core';
describe('AddPetPageComponent', () => {
  let component: AddPetPageComponent;
  let fixture: ComponentFixture<AddPetPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPetPageComponent]
    });
    fixture = TestBed.createComponent(AddPetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
