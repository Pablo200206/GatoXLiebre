import { Component } from '@angular/core';
import { PetInfo } from 'src/app/entities/receive/pet-info';
import { AdoptionsModule } from '../../adoptions.module';

@Component({
  selector: 'app-adoptions-page',
  templateUrl: './adoptions-page.component.html',
  styleUrls: ['./adoptions-page.component.css']
})
export class AdoptionsPageComponent {
    nombre: string = "adopciones";
    searchValues: PetInfo;
    list: PetInfo[] = [
        
    {
        nombre: 'Fido',
        raza: 'Labrador',
        edad: 4,
        sexo: 'Masculino',
        size: 'Grande'
    },
    {
        nombre: 'Fluffy',
        raza: 'Persa',
        edad: 3,
        sexo: 'Femenino',
        size: 'Pequeño'
    },
    {
        nombre: 'Max',
        raza: 'Golden Retriever',
        edad: 7,
        sexo: 'Masculino',
        size: 'Grande'
    },
    {
        nombre: 'Misty',
        raza: 'Siamesa',
        edad: 2,
        sexo: 'Femenino',
        size: 'Pequeño'
    },
    {
        nombre: 'Rex',
        raza: 'Pastor Alemán',
        edad: 6,
        sexo: 'Masculino',
        size: 'Grande'
    },
    {
        nombre: 'Bella',
        raza: 'Poodle',
        edad: 5,
        sexo: 'Femenino',
        size: 'Mediano'
    }

    




    ];
    
    setValues(values: PetInfo) {
        this.searchValues = values;
        this.search()
    }

    search() {
        params.get('id')
    }
}
