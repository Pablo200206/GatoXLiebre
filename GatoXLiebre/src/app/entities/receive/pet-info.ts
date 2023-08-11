import { Age } from "./age";
import { Animal } from "./animal";
import { Genero } from "./genero";
import { Provincia } from "./provincia";

export interface PetInfo {
    nombre: string,
    animal: Animal,
    edad: Age,
    provincia: Provincia,
    genero: Genero
}
