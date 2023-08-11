import { Component, OnInit } from '@angular/core';
import { PetInfo } from 'src/app/entities/receive/pet-info';
import { AdoptionsModule } from '../../adoptions.module';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/entities/receive/animal';
import { Age } from 'src/app/entities/receive/age';
import { Genero } from 'src/app/entities/receive/genero';
import { Provincia } from 'src/app/entities/receive/provincia';

@Component({
  selector: 'app-adoptions-page',
  templateUrl: './adoptions-page.component.html',
  styleUrls: ['./adoptions-page.component.css']
})
export class AdoptionsPageComponent  {
    animales: PetInfo[] = [
  
  {
    nombre: "Coco",
    animal: Animal.Gato,
    edad: Age.Joven,
    provincia: Provincia.Valencia,
    genero: Genero.Masculino,
  },
  {
    nombre: "Bella",
    animal: Animal.Perro,
    edad: Age.Cachorro,
    provincia: Provincia.Madrid,
    genero: Genero.Femenino,
  },
  {
    nombre: "Leo",
    animal: Animal.Gato,
    edad: Age.Adulto,
    provincia: Provincia.Malaga,
    genero: Genero.Masculino,
  },
  {
    nombre: "Nina",
    animal: Animal.Roedor,
    edad: Age.Adulto,
    provincia: Provincia.Barcelona,
    genero: Genero.Femenino,
  },
  {
    nombre: "Rocky",
    animal: Animal.Perro,
    edad: Age.Adulto,
    provincia: Provincia.Valencia,
    genero: Genero.Masculino,
  },
  {
    nombre: "Lola",
    animal: Animal.Gato,
    edad: Age.Joven,
    provincia: Provincia.Madrid,
    genero: Genero.Femenino,
  },
  {
    nombre: "Kiwi",
    animal: Animal.Perro,
    edad: Age.Cachorro,
    provincia: Provincia.Barcelona,
    genero: Genero.Femenino,
  },
  {
    nombre: "Thor",
    animal: Animal.Perro,
    edad: Age.Joven,
    provincia: Provincia.Malaga,
    genero: Genero.Masculino,
  },
];

}
