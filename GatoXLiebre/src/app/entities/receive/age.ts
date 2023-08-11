export enum Age {
    Cachorro = "Cachorro",
    Joven = "Joven",
    Adulto = "Adulto",
    Mayor = "Mayor"
}

export const Age2Label: Record<Age, string> = {
    [Age.Cachorro]: "Cachorro",
    [Age.Joven]: "Joven",
    [Age.Adulto]: "Adulto",
    [Age.Mayor]: "Mayor"
}