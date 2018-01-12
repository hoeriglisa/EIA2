/* Hiermit versichere ich, dass ich die Aufgabe selbst geschrieben habe. - Lisa San Martin H�rig, 256060*/
var aufgabe10;
(function (aufgabe10) {
    window.addEventListener("load", init);
    // Baumauswahl
    let kiefer = {
        name: "Kiefer",
        price: 15
    };
    let nordmann = {
        name: "Nordmanntanne",
        price: 20
    };
    let palme = {
        name: "Palme",
        price: 10
    };
    // Halterung
    let silberH = {
        name: "Silberhalterung",
        price: 5
    };
    let goldH = {
        name: "Goldhalterung",
        price: 7
    };
    let bambusH = {
        name: "Bambushalterung",
        price: 2
    };
    // Kugeln
    let kugelrot = {
        name: "Rote Kugeln",
        price: 10
    };
    let kugelgold = {
        name: "Goldene Kugeln",
        price: 15
    };
    let kugeldisko = {
        name: "Disko Kugeln",
        price: 10
    };
    // Kerzentyp
    let kleinekerzen = {
        name: "Kleine Kerzen",
        price: 5
    };
    let grossekerzen = {
        name: "Gro�e Kerzen",
        price: 10
    };
    let eckigekerzen = {
        name: "Eckige Kerzen",
        price: 10
    };
    let rundekerzen = {
        name: "Runde Kerzen",
        price: 10
    };
    //Lamettaauswahl
    let grossepackung = {
        name: "Gro�e Packung/500g",
        price: 15
    };
    let mittlerepackung = {
        name: "Mittlere Packung/ 250g",
        price: 10
    };
    let kleinepackung = {
        name: "Kleine Packung/100g",
        price: 5
    };
    let tree = [nordmann, kiefer, palme];
    let kugeln = [kugelrot, kugelgold, kugeldisko];
    let kerzen = [grossekerzen, kleinekerzen, eckigekerzen, rundekerzen];
    let halterung = [silberH, goldH, bambusH];
    let lametta = [grossepackung, mittlerepackung, kleinepackung];
    //Eventlistener der auf onclick reagiert, get element by id so die elemente bekommen, parseInt
    function createElements() {
        let box1 = document.createElement("Fieldset");
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=main.js.map