/* Aufgabe: 9
    Name: Lisa San Martin H�rig
    Matrikel: 256060
    Datum: 15.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var aufgabe9;
(function (aufgabe9) {
    window.addEventListener("load", init);
    let theChosenLetter;
    document.addEventListener("keydown", keyboardSelection);
    // Characters 
    function init() {
        let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "X", "Y", "Z"];
        let lettercount = letter.length;
        for (let i = 0; i < letter.length; i++) {
            drawBoxes(letter[i]);
        }
        drawPaper();
    }
    // Buchstabenboxen zeichnen
    function drawBoxes(_letter) {
        let div = document.createElement("div");
        div.style.width = "42px";
        div.style.height = "42px";
        div.style.font = "Arial Bold";
        div.style.fontSize = "38px";
        div.style.backgroundColor = "yellow";
        div.innerText = _letter;
        div.id = _letter;
        div.className = "Buchstaben";
        document.body.appendChild(div);
    }
    // Papier wird gezeichnet
    function drawPaper() {
        let paper = document.createElement("div");
        paper.style.width = "700px";
        paper.style.height = "950px";
        paper.style.margin = "5%";
        paper.style.marginTop = "1%";
        paper.style.backgroundColor = "black";
        paper.style.position = "absolute";
        paper.style.top = "1%";
        document.body.appendChild(paper);
        // Was fehlt: Buchstaben in den Brief einf�gen, Buchstaben ausw�hlen & die Fehlermeldung beheben
    }
    //Set letters to pap    
    function insertLetters(_event) {
        let paperLetterBox = document.createElement("div");
        paperLetterBox.innerText = "_letter";
        paperLetterBox.style.backgroundColor = "yellow";
        paperLetterBox.style.height = "42px";
        paperLetterBox.style.width = "42px";
        paperLetterBox.style.fontSize = "38";
        paperLetterBox.style.right = _event.pageX + "px";
        paperLetterBox.style.bottom = _event.pageY + "px";
        document.body.appendChild(paperLetterBox);
        let mouseClick = _event.target;
    }
    function keyboardSelection(event) {
        if (event.key == "a" || event.key == "A") {
            theChosenLetter = event.key;
        }
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map