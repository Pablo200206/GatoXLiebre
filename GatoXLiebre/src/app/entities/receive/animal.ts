export enum Animal {
    Perro = "Perro",
    Gato = "Gato",
    Roedor = "Roedor"
}

export const Animal2Label: Record<Animal, string> = {
    [Animal.Perro]: "Perro", 
    [Animal.Gato]: "Gato",
    [Animal.Roedor]: "Roedor"
}