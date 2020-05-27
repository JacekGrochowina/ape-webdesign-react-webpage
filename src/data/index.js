import routes from 'routes';
import OpiekaNadStronami from 'assets/bg/opieka-nad-stronami.jpg';
import ProjektowanieGrafiki from 'assets/bg/tworzenie-grafiki.jpg';
import TworzenieStron from 'assets/bg/tworzenie-stron.jpg';
const data = {
    nav: [
        {
            key: 1,
            name: "Domowa",
            to: routes.home,
        },
        {
            key: 2,
            name: "Tworzenie stron",
            to: routes.webdesign,
        },
        {
            key: 3,
            name: "Opieka nad stronami",
            to: routes.takecare,
        },
        {
            key: 4,
            name: "Projektowanie grafiki",
            to: routes.design,
        },
        {
            key: 5,
            name: "Kontakt",
            to: routes.contact,
        },
    ],
    swiper: [
        {
            key: 1,
            title: "Tworzenie stron internetowych",
            description: "Tworzymy funkcjonalne i nowoczesne strony internetowe. Sprawdź naszą ofertę i zaufaj specjalistom.",
            bgImg: TworzenieStron,
            to: routes.webdesign,
        },
        {
            key: 2,
            title: "Opieka nad stronami internetowymi",
            description: "Wprowadzanie na bieżąco zmian na stronie. Stała opieka jest najlepszym sposobem na utrzymanie zawsze aktualnego serwisu.",
            bgImg: OpiekaNadStronami,
            to: routes.takecare,
        },
        {
            key: 3,
            title: "Projektowanie grafiki",
            description: "Wykonywane przez nas projekty są pełne pomysłów, a tworzona identyfikacja wizualna jest przemyślana.",
            bgImg: ProjektowanieGrafiki,
            to: routes.design,
        },
    ],
    prices: [
        {
            category: "webdesign",
            cards: [
                {
                    title: "One Page / Wizytówka",
                    price: 799,
                    focus: false,
                    services: [
                        "onepage / 0 podstron",
                        "1 płatna grafika",
                        "Responsywny layout",
                        "Nowoczesny design",
                        "Mapa Google Maps",
                        "Galeria obsługująca swipe",
                        "Hosting & domena gratis",
                        "Dodanie do Google"
                    ]
                },
                {
                    title: "Standardowa",
                    price: 1399,
                    focus: true,
                    services: [
                        "do 5 podstron",
                        "3 płatne grafiki",
                        "Responsywny layout",
                        "Nowoczesny design",
                        "Mapa Google Maps",
                        "Galeria obsługująca swipe",
                        "Hosting & domena gratis",
                        "Dodanie do Google",
                        "Darmowy certyfikat SSL",
                        "Tworzenie wizytówki firmy w Google",
                        "Zaprojektowanie/odświeżenie logo"
                    ]
                },
                {
                    title: "Indywidualny projekt",
                    price: 1999,
                    focus: false,
                    services: [
                        "5+ podstron",
                        "5 płatnych grafik",
                        "Responsywny layout",
                        "Nowoczesny design",
                        "Mapa Google Maps",
                        "Galeria obsługująca swipe",
                        "Hosting & domena gratis",
                        "Dodanie do Google",
                        "Darmowy certyfikat SSL",
                        "Tworzenie wizytówki firmy w Google",
                        "Zaprojektowanie/odświeżenie logo",
                        "Wektorowe logo",
                        "Uzupełnienie strony treścią"
                    ]
                },
            ]
        },
        {
            category: "takecare",
            cards: [
                {
                    title: "podstawowy",
                    price: 99,
                    focus: false,
                    services: [
                        "Monitorowanie dostępności strony",
                        "Dbanie o aktualność domeny",
                        "Nadzór nad działaniem bazy danych",
                        "Tworzenie kopii zapasowej",
                        "Ochrona przed wirusami",
                    ]
                },
                {
                    title: "Standardowy",
                    price: 159,
                    focus: true,
                    services: [
                        "Monitorowanie dostępności strony",
                        "Dbanie o aktualność domeny",
                        "Nadzór nad działaniem bazy danych",
                        "Tworzenie kopii zapasowej",
                        "Ochrona przed wirusami",
                        "Aktualizacja oprogramowania",
                        "Uaktualnianie informacji na stronie",
                        "Dodawanie nowych treści",
                        "Poprawianie błędów",
                        "Drobne usprawnienia działania",
                        "Windowanie strony"
                    ]
                },
                {
                    title: "Indywidualny",
                    price: 199,
                    focus: false,
                    services: [
                        "Monitorowanie dostępności strony",
                        "Dbanie o aktualność domeny",
                        "Nadzór nad działaniem bazy danych",
                        "Tworzenie kopii zapasowej",
                        "Ochrona przed wirusami",
                        "Aktualizacja oprogramowania",
                        "Uaktualnianie informacji na stronie",
                        "Dodawanie nowych treści",
                        "Poprawianie błędów",
                        "Drobne usprawnienia działania",
                        "Windowanie strony",
                        "Dowolne zmiany na stronie",
                        "Aktualizacja wizytówki Google"
                    ]
                },
            ]
        },
        {
            category: "design",
            cards: [
                {
                    title: "Projektowanie logo",
                    price: 250,
                    focus: false,
                    services: [
                        "Plik SVG",
                        "Prezentacja logo",
                        "Gwarancja zadowolenia",
                        "Mało elementów, dużo informacji",
                        "Proste i charakterystyczne"
                    ]
                },
                {
                    title: "Identyfikacja wizualna",
                    price: 300,
                    focus: false,
                    services: [
                        "Foldery",
                        "Wizytówki",
                        "Papier firmowy",
                        "Wiele innych",
                        "Identyfikacja współgrająca z logo",
                        "Zaprojektowanie kolorów przewodnich"
                    ]
                },
                {
                    title: "Projektowanie stron www",
                    price: 500,
                    focus: false,
                    services: [
                        "Nowoczesny design",
                        "Poprawa wizerunku firmy",
                        "Kreowanie wizerunku specjalisty",
                        "Spójna z koncepcją identyfikacji wizualnej",
                    ]
                },
            ]
        },
    ]
};

export default data;