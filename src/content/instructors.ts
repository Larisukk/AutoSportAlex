export interface Instructor {
    id: string;
    name: string;
    role: string;
    quote?: string;
    categories: string[];
    imageUrl?: string;
}

export const instructors: Instructor[] = [
    {
        id: "alina-truica",
        name: "Truica Alina",
        role: "Profesor Legislație Rutieră",
        quote: "Împreună vom desluși tainele legislației rutiere.",
        categories: ["Legislatie"]
    },
    {
        id: "sandu-truica",
        name: "Truica Sandu",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "marian-capatina",
        name: "Capatina Marian",
        role: "Instructor auto",
        categories: ["B", "C", "CE"]
    },
    {
        id: "tudorel-focaru",
        name: "Focaru Tudorel",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "ionel-radoi",
        name: "Radoi Ionel",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "gabriel-lujeru",
        name: "Lujeru Gabriel",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "marian-barbu",
        name: "Barbu Marian",
        role: "Instructor auto",
        categories: ["B"]
    }
];
