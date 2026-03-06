export interface Category {
    id: string;
    name: string;
    title: string;
    description: string;
    forWho: string;
    icon: string; // SVG path or generic name
}

export const categories: Category[] = [
    {
        id: "cat-b",
        name: "Categoria B",
        title: "Permis Auto Categoria B",
        description: "Curs complet pentru obținerea permisului de conducere categoria B. Ideal pentru autoturisme.",
        forWho: "Persoane peste 18 ani care doresc să conducă autoturisme.",
        icon: "car"
    },
    {
        id: "cat-c-ce",
        name: "Categoria C, CE",
        title: "Permis Auto Categoria C și CE",
        description: "Pregătire profesională pentru conducerea camioanelor și ansamblurilor de vehicule.",
        forWho: "Viitori șoferi profesioniști care doresc să profeseze în transportul de mărfuri.",
        icon: "truck"
    },
    {
        id: "cat-a",
        name: "Categoria A, A1, A2",
        title: "Permis Moto Categoriile A",
        description: "Cursuri practice și teoretice pentru pasionații de motociclete din toate categoriile.",
        forWho: "Pasionați de două roți, vârsta minimă diferă în funcție de subcategorie.",
        icon: "motorcycle"
    }
];
