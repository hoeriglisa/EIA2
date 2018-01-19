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
        div.addEventListener("click", chooseLetterF);
        document.body.appendChild(div);
    }
    // Papier wird gezeichnet
    function drawPaper() {
        let paper = document.createElement("div");
        paper.id = "paper";
        paper.style.width = "700px";
        paper.style.height = "950px";
        paper.style.margin = "5%";
        paper.style.marginTop = "1%";
        paper.style.backgroundColor = "black";
        paper.style.position = "absolute";
        paper.style.top = "1%";
        paper.addEventListener("click", insertLetters);
        document.body.appendChild(paper);
        // Was fehlt: Buchstaben in den Brief einf�gen, Buchstaben ausw�hlen & die Fehlermeldung beheben
    }
    // choose Letter from List 
    function chooseLetterF(_event) {
        let mouseclick = _event.target;
        theChosenLetter = mouseclick.id;
        let divs = document.getElementsByClassName("Buchstaben");
        for (let i = 0; i < divs.length; i++) {
            if (theChosenLetter != divs[i].id) {
                divs[i].style.color = "pink";
                divs[i].style.backgroundColor = "yellow";
            }
            else {
                divs[i].style.color = "pink";
                divs[i].style.backgroundColor = "green";
            }
        }
    }
    //Set letters to paper    
    function insertLetters(_event) {
        let paperLetterBox = document.createElement("div");
        paperLetterBox.innerText = theChosenLetter;
        paperLetterBox.style.backgroundColor = "yellow";
        paperLetterBox.style.height = "42px";
        paperLetterBox.style.width = "42px";
        paperLetterBox.style.fontSize = "38";
        paperLetterBox.style.left = _event.pageX + "px";
        paperLetterBox.style.top = _event.pageY + "px";
        paperLetterBox.style.position = "absolute";
        document.body.appendChild(paperLetterBox);
        let mouseClick = _event.target;
    }
    function keyboardSelection(event) {
        if (event.key == "a" || event.key == "A") {
            theChosenLetter = event.key;
        }
        if (event.key == "b" || event.key == "B") {
            theChosenLetter = event.key;
        }
        if (event.key == "c" || event.key == "C") {
            theChosenLetter = event.key;
        }
        if (event.key == "e" || event.key == "E") {
            theChosenLetter = event.key;
        }
        if (event.key == "f" || event.key == "F") {
            theChosenLetter = event.key;
        }
        if (event.key == "g" || event.key == "G") {
            theChosenLetter = event.key;
        }
        if (event.key == "h" || event.key == "H") {
            theChosenLetter = event.key;
        }
        if (event.key == "i" || event.key == "I") {
            theChosenLetter = event.key;
        }
        if (event.key == "j" || event.key == "J") {
            theChosenLetter = event.key;
        }
        if (event.key == "k" || event.key == "K") {
            theChosenLetter = event.key;
        }
        if (event.key == "l" || event.key == "L") {
            theChosenLetter = event.key;
        }
        if (event.key == "m" || event.key == "M") {
            theChosenLetter = event.key;
        }
        if (event.key == "n" || event.key == "N") {
            theChosenLetter = event.key;
        }
        if (event.key == "o" || event.key == "O") {
            theChosenLetter = event.key;
        }
        if (event.key == "p" || event.key == "P") {
            theChosenLetter = event.key;
        }
        if (event.key == "q" || event.key == "Q") {
            theChosenLetter = event.key;
        }
        if (event.key == "r" || event.key == "R") {
            theChosenLetter = event.key;
        }
        if (event.key == "s" || event.key == "T") {
            theChosenLetter = event.key;
        }
        if (event.key == "u" || event.key == "V") {
            theChosenLetter = event.key;
        }
        if (event.key == "w" || event.key == "W") {
            theChosenLetter = event.key;
        }
        if (event.key == "x" || event.key == "X") {
            theChosenLetter = event.key;
        }
        if (event.key == "y" || event.key == "Y") {
            theChosenLetter = event.key;
        }
        if (event.key == "z" || event.key == "Z") {
            theChosenLetter = event.key;
        }
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map