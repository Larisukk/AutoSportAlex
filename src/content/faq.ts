export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "De ce acte am nevoie pentru înscriere?",
        answer: "Pentru înscriere ai nevoie de cartea de identitate (CI), fișa medicală, avizul psihologic și cazierul judiciar."
    },
    {
        id: "faq2",
        question: "Cât durează cursurile pentru școala de șoferi?",
        answer: "Durata este de cel puțin 4 săptămâni, cuprinzând orele de legislație teoretică și minim 30 de ore de conducere practică pentru Categoria B."
    },
    {
        id: "faq3",
        question: "Plata se poate face și în rate?",
        answer: "Da! Oferim posibilitatea plății în rate pe parcursul școlarizării. Prima rată se achită la înscriere."
    },
    {
        id: "faq4",
        question: "Programul orelor de conducere este flexibil?",
        answer: "Absolut. Stabilim programul de comun acord cu instructorul tău, astfel încât să se potrivească orarului tău zilnic."
    },
    {
        id: "faq5",
        question: "Se pot lua ore suplimentare?",
        answer: "Da. Dacă simți că ai nevoie de mai multă pregătire înainte de examen, poți solicita oricând ședințe suplimentare de condus."
    },
    {
        id: "faq6",
        question: "Unde are loc cursul de legislație?",
        answer: "Cursurile de legislație rutieră au loc într-o sală modernă, dotată la standarde europene, sub îndrumarea doamnei profesor Alina Truică."
    }
];
