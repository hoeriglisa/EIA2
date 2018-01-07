/* Hiermit versichere ich, dass ich die Aufgabe selbst geschrieben habe. - Lisa San Martin Hörig, 256060*/

namespace aufgabe10 {

    window.addEventListener("load", init);

        interface Artikel {
            name: string;
            price: number;
        }

        // Baumauswahl
        let kiefer: Artikel = {
            name: "Kiefer",
            price: 15
        };

        let nordmann: Artikel = {
            name: "Nordmanntanne",
            price: 20
        };
        let palme: Artikel = {
            name: "Palme",
            price: 10
        };

        // Halterung

        let silberH: Artikel = {
            name: "Silberhalterung",
            price: 5
        };

        let goldH: Artikel = {
            name: "Goldhalterung",
            price: 7
        };
        let bambusH: Artikel = {
            name: "Bambushalterung",
            price: 2
        };


        // Kugeln

        let kugelrot: Artikel = {
            name: "Rote Kugeln",
            price: 10
        };

        let kugelgold: Artikel = {
            name: "Goldene Kugeln",
            price: 15
        };
        let kugeldisko: Artikel = {
            name: "Disko Kugeln",
            price: 10
        };

        // Kerzentyp

        let kleinekerzen: Artikel = {
            name: "Kleine Kerzen",
            price: 5
        };

        let grossekerzen: Artikel = {
            name: "Große Kerzen",
            price: 10
        };
        let eckigekerzen: Artikel = {
            name: "Eckige Kerzen",
            price: 10
        };
        let rundekerzen: Artikel = {
            name: "Runde Kerzen",
            price: 10
        };

        //Lamettaauswahl

        let grossepackung: Artikel = {
            name: "Große Packung/500g",
            price: 15
        };
        let mittlerepackung: Artikel = {
            name: "Mittlere Packung/ 250g",
            price: 10
        };
        let kleinepackung: Artikel = {
            name: "Kleine Packung/100g",
            price: 5
        };
  
        let items: number [] = [kiefer.price, nordmann.price, palme.price, goldH.price, silberH.price, bambusH.price, kugelgold.price, kugelrot.price, kugeldisko.price, kleinekerzen.price, grossekerzen.price, eckigekerzen.price, rundekerzen.price, grossepackung.price, mittlerepackung.price, kleinepackung.price];
 
     
 }
 