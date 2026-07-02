
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
        id: "truica-alina",
        name: "Truică Alina",
        role: "Profesor Legislație Rutieră",
        quote: "Împreună vom desluși tainele legislației rutiere.",
        categories: ["Legislatie"],
        imageUrl: "/images/instructors/alina.webp"
    },
    {
        id: "truica-sandu",
        name: "Truică Sandu",
        role: "Instructor auto",
        categories: ["B", "C", "CE"]
    },
    {
        id: "capatina-marius-daniel",
        name: "Căpățînă Marius Daniel",
        role: "Instructor auto",
        categories: ["A", "A1", "A2", "B", "C", "CE"]
    },
    {
        id: "focaru-tudorel",
        name: "Focaru Tudorel",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "radoi-ionel",
        name: "Rădoi Ionel",
        role: "Instructor auto",
        categories: ["B"]
    },
    {
        id: "lujeru-gabriel",
        name: "Lujeru Gabriel",
        role: "Instructor auto",
        categories: ["B"]
    }
];
