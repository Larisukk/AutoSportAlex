export interface Review {
    id: string;
    authorName: string;
    rating: number; // 1-5
    text: string;
    date: string; // e.g., "Acum 2 luni"
}

export const reviews: Review[] = [
    {
        id: "r1",
        authorName: "Mihai Popescu",
        rating: 5,
        text: "Cei mai buni instructori! Am luat permisul din prima. Vă recomand cu mare încredere.",
        date: "Acum o săptămână"
    },
    {
        id: "r2",
        authorName: "Andreea Ionescu",
        rating: 5,
        text: "O școală de șoferi de nota 10. Răbdare, profesionalism și mașini mereu curate și în stare perfectă de funcționare.",
        date: "Acum 2 luni"
    },
    {
        id: "r3",
        authorName: "Florin Dumitru",
        rating: 5,
        text: "Programul a fost flexibil și s-a mulat perfect pe orarul meu de muncă. Mulțumesc instructorului pentru răbdarea acordată!",
        date: "Acum 3 luni"
    },
    {
        id: "r4",
        authorName: "Elena Vasile",
        rating: 5,
        text: "Cursurile de legislație au fost foarte explicite. Doamna Alina Truică te face să înțelegi perfect tot ce trebuie pentru sală.",
        date: "Acum 5 luni"
    },
    {
        id: "r5",
        authorName: "Cristian Radu",
        rating: 5,
        text: "Profesioniști adevărați, recomand categoria C și CE, pregătire excelentă pentru viitori șoferi de tir.",
        date: "Acum 6 luni"
    }
];
