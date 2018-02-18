/**
Abschlussarbeit EIA
Lisa San Martin H�rig
Matrikelnr. 256060

Hiermit versichere ich, dass ich den Code selbst geschrieben habe. **/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", startBildschirm);
    var image;
    let abschlussaufgabe = [];
    Abschlussaufgabe.omaspeed = 10; // Verhindert m�hsames 1px bewegen
    let zaehne = [];
    let zahnZahl = 5;
    Abschlussaufgabe.omaHitbox = 25; // der Radius in dem Omi ein Ziel erreicht
    let zahncounter = 0; // Bei 5 dann ists gewonnen
    Abschlussaufgabe.rechnungZahl = 15; // Anzahl an Rechnungen
    Abschlussaufgabe.rechnungen = [];
    Abschlussaufgabe.gamestatus = 0;
    let winstatus = 0;
    function init() {
        let neustartButton = document.getElementById("neustartButton");
        neustartButton.style.display = "none";
        winstatus = 0;
        Abschlussaufgabe.gamestatus = 0;
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        buttondraw(); //Bewegungsbuttons zeichnen
        for (let i = 0; i < 1; i++) {
            Abschlussaufgabe.oma = new Abschlussaufgabe.Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(Abschlussaufgabe.oma);
        }
        for (let i = 0; i < zahnZahl; i++) {
            zaehne[i] = new Abschlussaufgabe.Zahn(0 + Math.random() * 350, 0 + Math.random() * 250, "#ffffff");
            abschlussaufgabe.push(zaehne[i]);
        }
        for (let i = 0; i < Abschlussaufgabe.rechnungZahl; i++) {
            Abschlussaufgabe.rechnungen[i] = new Abschlussaufgabe.Rechnung(0 + Math.random() * 400, 0 + Math.random() * -500, "#ffffff");
            abschlussaufgabe.push(Abschlussaufgabe.rechnungen[i]); //Haut rechnungen in den Array rein 
        }
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 400, 300);
        animate();
    }
    function animate() {
        if (Abschlussaufgabe.gamestatus == 0) {
            Abschlussaufgabe.crc2.putImageData(image, 0, 0);
            for (let i = 0; i < abschlussaufgabe.length; i++) {
                let s = abschlussaufgabe[i];
                s.update(); //superklasse geupdated
            }
            for (let j = 0; j < Abschlussaufgabe.rechnungZahl; j++) {
                if (abschlussaufgabe[j].y > 450) {
                    Abschlussaufgabe.rechnungen[j].y = -40; // Wenn auf 400, werden auf unter 0 zur�ckgesetzt
                }
                Abschlussaufgabe.rechnungen[j].y += Math.random();
                let x;
                let y;
                if (Abschlussaufgabe.rechnungen[j].x < Abschlussaufgabe.oma.x) {
                    x = Abschlussaufgabe.oma.x - Abschlussaufgabe.rechnungen[j].x;
                }
                if (Abschlussaufgabe.rechnungen[j].x > Abschlussaufgabe.oma.x) {
                    x = (Abschlussaufgabe.oma.x - Abschlussaufgabe.rechnungen[j].x) * (-1);
                }
                if (Abschlussaufgabe.rechnungen[j].y < Abschlussaufgabe.oma.y) {
                    y = Abschlussaufgabe.oma.y - Abschlussaufgabe.rechnungen[j].y;
                }
                if (Abschlussaufgabe.rechnungen[j].y > Abschlussaufgabe.oma.y) {
                    y = (Abschlussaufgabe.oma.y - Abschlussaufgabe.rechnungen[j].y) * (-1);
                }
                if (x < Abschlussaufgabe.omaHitbox && y < Abschlussaufgabe.omaHitbox) {
                    gameOver();
                }
                Abschlussaufgabe.rechnungen[j].draw();
            }
            window.setTimeout(animate, 20); // Timer f�rs Animieren
        }
        else if (Abschlussaufgabe.gamestatus == 1) {
            gameWin();
        }
        else if (Abschlussaufgabe.gamestatus == 2) {
            gameOver();
        }
    }
    function winanimate() {
        if (winstatus == 1) {
            Abschlussaufgabe.crc2.putImageData(image, 0, 0);
            for (let i = 0; i < abschlussaufgabe.length; i++) {
                let s = abschlussaufgabe[i];
                s.update(); //superklasse geupdated
            }
            window.setTimeout(winanimate, 20); // Timer f�rs Animieren
        }
    }
    //Steuerungsbuttons malen --> Buttonsteuerung um den Gameboylook zu unterst�tzen :-)
    function buttondraw() {
        let buttonup = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "65%";
        buttonup.style.left = "40%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", omamoveUp); //Reagieren aufs Klicken, f�hren die omamove+Richtung Funktion aus
        document.body.appendChild(buttonup);
        let buttonleft = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "73%";
        buttonleft.style.left = "25%";
        buttonleft.style.height = "8%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", omamoveLeft);
        document.body.appendChild(buttonleft);
        let buttonright = document.createElement("button");
        buttonright.innerText = "DOWN";
        buttonright.style.position = "absolute";
        buttonright.style.top = "81%";
        buttonright.style.left = "40%";
        buttonright.style.height = "8%";
        buttonright.style.width = "25%";
        buttonright.id = "ButtonDown";
        buttonright.addEventListener("click", omamoveDown);
        document.body.appendChild(buttonright);
        let buttondown = document.createElement("button");
        buttondown.innerText = "RIGHT";
        buttondown.style.position = "absolute";
        buttondown.style.top = "73%";
        buttondown.style.left = "55%";
        buttondown.style.height = "8%";
        buttondown.id = "ButtonRight";
        buttondown.addEventListener("click", omamoveRight);
        document.body.appendChild(buttondown);
    }
    function buttonRemove() {
        let buttonUp = document.getElementById("ButtonUp");
        buttonUp.parentNode.removeChild(buttonUp);
        let buttonDown = document.getElementById("ButtonDown");
        buttonDown.parentNode.removeChild(buttonDown);
        let buttonRight = document.getElementById("ButtonRight");
        buttonRight.parentNode.removeChild(buttonRight);
        let buttonLeft = document.getElementById("ButtonLeft");
        buttonLeft.parentNode.removeChild(buttonLeft);
        let startbutton = document.getElementById("startButton");
        startbutton.parentNode.removeChild(startbutton);
    }
    // Z�hne einsammeln
    function zahnSammeln() {
        for (let i = 0; i < zahnZahl; i++) {
            let x;
            let y;
            if (zaehne[i].x < Abschlussaufgabe.oma.x) {
                x = Abschlussaufgabe.oma.x - zaehne[i].x;
            }
            if (zaehne[i].x > Abschlussaufgabe.oma.x) {
                x = (Abschlussaufgabe.oma.x - zaehne[i].x) * (-1);
            }
            if (zaehne[i].y < Abschlussaufgabe.oma.y) {
                y = Abschlussaufgabe.oma.y - zaehne[i].y;
            }
            if (zaehne[i].y > Abschlussaufgabe.oma.y) {
                y = (Abschlussaufgabe.oma.y - zaehne[i].y) * (-1);
            }
            if (x < Abschlussaufgabe.omaHitbox && y < Abschlussaufgabe.omaHitbox) {
                zaehne[i].x = 5000; // Wird auf die x Koordinate 5000 gesetzt, somit ist es aus dem Bild.
                zaehne[i].y = 5000;
                zahncounter += 1; //Wenn eingesammelt dann +1 Zahn
                zaehne.splice(i, 1);
                document.getElementById("zahncounter").innerHTML = "Zaehne: " + zahncounter + " / 5"; //Zahncounter
                if (zahncounter == zahnZahl) {
                    gameWin();
                }
            }
        }
    }
    // Funktionen zum Omi bewegen
    function omamoveUp() {
        Abschlussaufgabe.oma.y -= Abschlussaufgabe.omaspeed;
        zahnSammeln();
    }
    function omamoveDown() {
        Abschlussaufgabe.oma.y += Abschlussaufgabe.omaspeed;
        zahnSammeln();
    }
    function omamoveRight() {
        Abschlussaufgabe.oma.x += Abschlussaufgabe.omaspeed;
        zahnSammeln();
    }
    function omamoveLeft() {
        Abschlussaufgabe.oma.x -= Abschlussaufgabe.omaspeed;
        zahnSammeln();
    }
    //Startbildschirm
    function startBildschirm() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        Abschlussaufgabe.crc2.font = "Arial";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Omi hat ihr Gebiss verloren", 130, 100);
        Abschlussaufgabe.crc2.fillText("Hilf ihr, die Zaehne einzusammeln und den Rechnungen auszuweichen!", 20, 150);
        startButton(); // Startbutton zeichnen
        let neustartbutton = document.createElement("button");
        neustartbutton.innerText = "NEUSTART";
        neustartbutton.style.position = "absolute";
        neustartbutton.style.top = "65%";
        neustartbutton.style.left = "17%";
        neustartbutton.style.height = "4%";
        neustartbutton.style.width = "10%";
        neustartbutton.id = "neustartButton";
        neustartbutton.style.display = "none";
        neustartbutton.addEventListener("click", init); //Reagieren aufs Klicken, f�hren die omamove+Richtung Funktion aus
        document.body.appendChild(neustartbutton);
    }
    //Startbutton
    function startButton() {
        let startbutton = document.createElement("button");
        startbutton.innerText = "START";
        startbutton.style.position = "absolute";
        startbutton.style.top = "65%";
        startbutton.style.left = "45%";
        startbutton.style.height = "4%";
        startbutton.style.width = "10%";
        startbutton.id = "startButton";
        startbutton.addEventListener("click", init); //Reagieren aufs Klicken, f�hren die omamove+Richtung Funktion aus
        document.body.appendChild(startbutton);
    }
    function neustartButton() {
        buttonRemove();
        let neustartButton = document.getElementById("neustartButton");
        neustartButton.style.display = "inline";
    }
    // Game Over Funktion
    function gameOver() {
        Abschlussaufgabe.gamestatus = 2;
        abschlussaufgabe = [];
        zaehne = [];
        Abschlussaufgabe.rechnungen = [];
        zahncounter = 0;
        document.getElementById("zahncounter").innerHTML = "Zaehne: " + zahncounter + " / 5";
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.clearRect(0, 0, 400, 300);
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        Abschlussaufgabe.crc2.font = "Arial";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Verloren!", 170, 100);
        Abschlussaufgabe.crc2.fillText("Oma muss ihre ganze Rente ausgeben!", 110, 150);
        // Oma im Endscreen zeichnen
        //Kopf
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 230, 30, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        //Augen
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(190, 220, 5, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(210, 220, 5, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(210, 220, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(190, 220, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        //Mund
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(190, 240);
        Abschlussaufgabe.crc2.lineTo(210, 240);
        Abschlussaufgabe.crc2.lineTo(210, 245);
        Abschlussaufgabe.crc2.lineTo(190, 245);
        Abschlussaufgabe.crc2.lineTo(190, 240);
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        //Haare
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 180, 10, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 210, 22, 3, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fill();
        //Laiberl
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(200, 260);
        Abschlussaufgabe.crc2.lineTo(230, 310);
        Abschlussaufgabe.crc2.lineTo(170, 310);
        Abschlussaufgabe.crc2.moveTo(200, 260);
        Abschlussaufgabe.crc2.fillStyle = "pink";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        neustartButton();
        //let g = 25;
        /**for (let i: number = 0; i < g; i++) {
            let r: Rechnung = new Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            abschlussaufgabe.push(r); //Haut on in den Array rein
        }
        image = crc2.getImageData(0, 0, 400, 300);
        animate();*/
    }
    Abschlussaufgabe.gameOver = gameOver;
    // Winscreen
    function gameWin() {
        Abschlussaufgabe.gamestatus = 1;
        abschlussaufgabe = [];
        zaehne = [];
        Abschlussaufgabe.rechnungen = [];
        zahncounter = 0;
        document.getElementById("zahncounter").innerHTML = "Zaehne: " + zahncounter + " / 5";
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.clearRect(0, 0, 400, 300);
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        Abschlussaufgabe.crc2.font = "Arial";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Gewonnen!", 170, 100);
        Abschlussaufgabe.crc2.fillText("Oma kann wieder lachen!", 130, 150);
        // Oma im Winscreen
        //Kopf
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 230, 30, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        //Augen
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(190, 220, 5, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(210, 220, 5, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(210, 220, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(190, 220, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        //Mund
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(190, 240);
        Abschlussaufgabe.crc2.lineTo(210, 240);
        Abschlussaufgabe.crc2.lineTo(210, 250);
        Abschlussaufgabe.crc2.lineTo(190, 250);
        Abschlussaufgabe.crc2.lineTo(190, 240);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        //Haare
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 180, 10, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 210, 22, 3, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "black";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fill();
        //Laiberl
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(200, 260);
        Abschlussaufgabe.crc2.lineTo(230, 310);
        Abschlussaufgabe.crc2.lineTo(170, 310);
        Abschlussaufgabe.crc2.moveTo(200, 260);
        Abschlussaufgabe.crc2.fillStyle = "pink";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.closePath();
        neustartButton();
        let konfettiAnzahl = 100;
        for (let i = 0; i < konfettiAnzahl; i++) {
            let k = new Abschlussaufgabe.Konfetti(0 + Math.random() * 400, 0 + Math.random() * 300, "red");
            abschlussaufgabe.push(k); //Haut on in den Array rein 
        }
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 400, 300);
        winstatus = 1;
        winanimate();
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map