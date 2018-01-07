/* Aufgabe: 9
    Name: Lisa San Martin Hörig
    Matrikel: 256060
    Datum: 15.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace aufgabe9 {
    function init(): void {
        let letter: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "X", "Y", "Z"];
        let lettercount: number = letter.length;

        for (let i: number = 0; i < letter.length; i++) {
            drawBoxes(_letter[i]);
        }
        
        drawPaper();
    }
// Buchstabenboxen zeichnen
    function drawBoxes(_letter: string): void {
        let div: HTMLDivElement = document.createElement("div");

        div.style.width = "70px";
        div.style.height = "70px";
        div.style.font = "Arial Bold";
        div.style.fontSize = "18px";
        div.style.backgroundColor = "yellow";
        div.innerText = "_letter";
    }


// Papier wird gezeichnet
function drawPaper(): void {
    let paper: HTMLDivElement = document.createElement("div");

    paper.style.width = "500px";
    paper.style.height = "700px";
    paper.style.margin = "5%";
    paper.style.backgroundColor = "black";

// Was fehlt: Buchstaben in den Brief einfügen, Buchstaben auswählen & die Fehlermeldung beheben
}}