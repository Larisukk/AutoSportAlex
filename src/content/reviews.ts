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
        authorName: "GUSU'",
        rating: 5,
        text: "Cursurile de legislație au fost foarte bine explicate, ușor de înțeles și chiar m-au ajutat în a înțelege mai bine codul rutier. Instructorul auto chiar a dat dovadă de profesionalism, implicându-se în fiecare oră de condus și ajutându-mă să înțeleg orice greșeală pe care o făceam. Recomand cu încredere Școala Autosport Alex!",
        date: "Google Review"
    },
    {
        id: "r2",
        authorName: "Mario Opris",
        rating: 5,
        text: "Experiența mea cu această școală a fost una foarte bună, cu un program flexibil, cu seriozitate în pregătire și cu profesionalism. Am luat sala din prima, iar explicațiile și implicarea instructorului meu m-au ajutat să-mi capăt încrederea și atenția distributivă în trafic, motiv pentru care eu recomand AutoSport Alex cu încredere.",
        date: "Google Review"
    },
    {
        id: "r3",
        authorName: "Mihai Udrea",
        rating: 5,
        text: "Mulțumesc acestei școli de șoferi. Instructori cu experiență, seriozitate maximă pentru orice categorie. A A1 A2 B Bx C CE.",
        date: "Google Review"
    },
    {
        id: "r4",
        authorName: "Laurențiu – Gabriel Aria",
        rating: 5,
        text: "Am avut o experiență excelentă la această școală de șoferi! Instructorii sunt foarte profesioniști, răbdători și explică clar fiecare aspect al condusului. Atmosfera este prietenoasă, iar orele de practică sunt bine structurate, ceea ce m-a ajutat să capăt încredere la volan. Recomand cu toată încrederea tuturor celor care vor să obțină permisul de conducere!",
        date: "Google Review"
    },
    {
        id: "r5",
        authorName: "Alina C",
        rating: 5,
        text: "Recomand cu încredere. Am întâlnit oameni profesioniști, cu care am comunicat eficient de la primul apel telefonic. Instructor calm, care a ajutat-o pe mama mea să își dezvolte de la zero abilitățile de conducător auto, iar doamna Alina, o persoană minunată din toate punctele de vedere; datorită explicațiilor dansei în cadrul orelor de legislație rutieră, mama mea a obținut admis din prima. Mulțumim pentru tot sprijinul acordat.",
        date: "Google Review"
    },
    {
        id: "r6",
        authorName: "Alexandra Ilies",
        rating: 5,
        text: "Recomand din tot sufletul! Profesionalism din toate punctele de vedere. Domnul instructor foarte răbdător și sincer, super mulțumită. Categoria C+E. Meritați 10 stele nu doar 5.",
        date: "Google Review"
    },
    {
        id: "r7",
        authorName: "Delia Marca",
        rating: 5,
        text: "Nu doar o școală de șoferi, ci o familie pasionată, frumoasă și niște prietenoși profesioniști care te îndrumă către succes. Alina, Sandu și echipa, oameni implicați, deschiși, prietenoși și foarte susținători.",
        date: "Google Review"
    },
    {
        id: "r8",
        authorName: "Dori Doria",
        rating: 5,
        text: "Am făcut categoria CE cu instructorul Nea Marian. Explică clar și te învață pas cu pas tot ce este nevoie să știi. Corectează greșelile pe loc și îți spune exact ce ai de făcut la examen. Recomand școala auto dacă vrei să înveți corect și să iei categoria CE sau B. Un instructor cum rar mai găsești și un profesionalism extraordinar!",
        date: "Google Review"
    }
];
