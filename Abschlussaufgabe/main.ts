/** 
Abschlussarbeit EIA
Lisa San Martin Hörig
Matrikelnr. 256060

Hiermit versichere ich, dass ich den Code selbst geschrieben habe. **/

namespace Abschlussaufgabe {
    window.addEventListener("load", startBildschirm);
    //document.addEventListener("keydown", pressingKey);
    export let crc2: CanvasRenderingContext2D;
    var image: ImageData;
    let abschlussaufgabe: Semesteraufgabe[] = [];
    export let oma: Omi;
    export let omaspeed: number = 10; // Verhindert mühsames 1px bewegen
    let zahn: Zahn;
    let zaehne: Zahn[] = [];
    let zahnZahl: number = 5;
    export let omaHitbox: number = 30; // der Radius in dem Omi ein Ziel erreicht
    let zahncounter: any = 0; // Bei 5 dann ists gewonnen
    export let rechnungZahl: number = 15; // Anzahl an Rechnungen
    export let rechnung: Rechnung;
    export let rechnungen: Rechnung[] = [];
    export let gamestatus: number = 0;

    function init(): void {
        gamestatus = 0;
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 400, 300);

        buttondraw(); //Bewegungsbuttons zeichnen

        for (let i: number = 0; i < 1; i++) {
            oma = new Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(oma);
        }

        for (let i: number = 0; i < zahnZahl; i++) {
            zahn = new Zahn(0 + Math.random() * 250, 0 + Math.random() * 200, "#ffffff");
            zaehne[i] = zahn;
            abschlussaufgabe.push(zahn);
        }


        for (let i: number = 0; i < rechnungZahl; i++) {
            rechnung = new Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            rechnungen[i] = rechnung;
            abschlussaufgabe.push(rechnung); //Haut rechnungen in den Array rein 
        }
        image = crc2.getImageData(0, 0, 400, 300);
        animate();
    }

    function animate(): void { // Animiert die fliegenden Rechnungen
        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < abschlussaufgabe.length; i++) {

            let s: Semesteraufgabe = abschlussaufgabe[i];
            s.update(); //superklasse geupdated
        }

        for (let j: number = 0; j < rechnungZahl; j++) {
            if (rechnungen[j].y > 400) {
                rechnungen[j].y = 0; // Wenn auf 400, werden auf 0 zurückgesetzt
            }

            rechnungen[j].y += Math.random();

            let x: number;
            let y: number;
            if (rechnungen[j].x < oma.x) {
                x = oma.x - rechnungen[j].x;
            }
            if (rechnungen[j].x > oma.x) {
                x = (oma.x - rechnungen[j].x) * (-1);
            }
            if (rechnungen[j].y < oma.y) {
                y = oma.y - rechnungen[j].y;
            }
            if (rechnungen[j].y > oma.y) {
                y = (oma.y - rechnungen[j].y) * (-1);
            }

            if (x < omaHitbox && y < omaHitbox) {
                gameOver();
            }


            rechnungen[j].draw();
        }

        if (gamestatus == 0) {
            window.setTimeout(animate, 20); // Timer fürs Animieren
        } else if (gamestatus == 1) {
            gameWin();
        } else if (gamestatus == 2) {
            gameOver();
        }
    }

    //Steuerungsbuttons malen --> Buttonsteuerung um den Gameboylook zu unterstützen :-)
    function buttondraw(): void {
        let buttonup: HTMLButtonElement = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "65%";
        buttonup.style.left = "40%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", omamoveUp); //Reagieren aufs Klicken, führen die omamove+Richtung Funktion aus
        document.body.appendChild(buttonup);

        let buttonleft: HTMLButtonElement = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "73%";
        buttonleft.style.left = "25%";
        buttonleft.style.height = "8%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", omamoveLeft);
        document.body.appendChild(buttonleft);

        let buttonright: HTMLButtonElement = document.createElement("button");
        buttonright.innerText = "DOWN";
        buttonright.style.position = "absolute";
        buttonright.style.top = "81%";
        buttonright.style.left = "40%";
        buttonright.style.height = "8%";
        buttonright.style.width = "25%";
        buttonright.id = "ButtonDown";
        buttonright.addEventListener("click", omamoveDown);
        document.body.appendChild(buttonright);

        let buttondown: HTMLButtonElement = document.createElement("button");
        buttondown.innerText = "RIGHT";
        buttondown.style.position = "absolute";
        buttondown.style.top = "73%";
        buttondown.style.left = "55%";
        buttondown.style.height = "8%";
        buttondown.id = "ButtonRight";
        buttondown.addEventListener("click", omamoveRight);
        document.body.appendChild(buttondown);

    }

    // Zähne einsammeln
    function zahnSammeln() {
        for (let i: number = 0; i < zahnZahl; i++) {
            let x: number;
            let y: number;
            if (zaehne[i].x < oma.x) {
                x = oma.x - zaehne[i].x;
            }
            if (zaehne[i].x > oma.x) {
                x = (oma.x - zaehne[i].x) * (-1);
            }
            if (zaehne[i].y < oma.y) {
                y = oma.y - zaehne[i].y;
            }
            if (zaehne[i].y > oma.y) {
                y = (oma.y - zaehne[i].y) * (-1);
            }

            if (x < omaHitbox && y < omaHitbox) {  //Hitbox = Radius bei dem eine Berührung als "Hit" gezählt wird
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
    function omamoveUp(): void {
        oma.y -= omaspeed;
        zahnSammeln();
    }

    function omamoveDown(): void {
        oma.y += omaspeed;
        zahnSammeln();
    }

    function omamoveRight(): void {
        oma.x += omaspeed;
        zahnSammeln();
    }

    function omamoveLeft(): void {
        oma.x -= omaspeed;
        zahnSammeln();
    }

    //Startbildschirm
    function startBildschirm() {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 400, 300);

        crc2.font = "Arial";
        crc2.fillStyle = "white";
        crc2.fillText("Omi hat ihr Gebiss verloren", 130, 100);
        crc2.fillText("Hilf ihr, die Zaehne einzusammeln und den Rechnungen auszuweichen!", 20, 150);
        startButton(); // Startbutton zeichnen
    }

    //Startbutton
    function startButton(): void {
        let startbutton: HTMLButtonElement = document.createElement("button");
        startbutton.innerText = "START";
        startbutton.style.position = "absolute";
        startbutton.style.top = "65%";
        startbutton.style.left = "45%";
        startbutton.style.height = "4%";
        startbutton.style.width = "10%";
        startbutton.id = "startButton";
        startbutton.addEventListener("click", init); //Reagieren aufs Klicken, führen die omamove+Richtung Funktion aus
        document.body.appendChild(startbutton);
    }


    // Game Over Funktion
    export function gameOver(): void {

        gamestatus = 2;
        for (let i: number = 0; i < zahnZahl; i++) {
            zaehne.splice(i, 1);
        }
        for (let j: number = 0; j < rechnungZahl; j++) {
            rechnungen.splice(j, 1);
        }

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, 400, 300);
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 400, 300);

        crc2.font = "Arial";
        crc2.fillStyle = "white";
        crc2.fillText("Verloren!", 170, 100);
        crc2.fillText("Oma muss ihre ganze Rente ausgeben!", 110, 150);

        // Oma im Endscreen zeichnen
        //Kopf
        crc2.beginPath();
        crc2.arc(200, 230, 30, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();

        //Augen
        crc2.beginPath();
        crc2.arc(190, 220, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(210, 220, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(210, 220, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(190, 220, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        //Mund
        crc2.beginPath();
        crc2.moveTo(190, 240);
        crc2.lineTo(210, 240);
        crc2.lineTo(210, 245);
        crc2.lineTo(190, 245);
        crc2.lineTo(190, 240);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();

        //Haare
        crc2.beginPath();
        crc2.arc(200, 180, 10, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(200, 210, 22, 3, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        //Laiberl
        crc2.beginPath();
        crc2.moveTo(200, 260);
        crc2.lineTo(230, 310);
        crc2.lineTo(170, 310);
        crc2.moveTo(200, 260);
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();
        startButton();

        let g = 25;
        /**for (let i: number = 0; i < g; i++) {
            let r: Rechnung = new Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            abschlussaufgabe.push(r); //Haut on in den Array rein 
        }
        image = crc2.getImageData(0, 0, 400, 300);
        animate();*/

    }

    // Winscreen
    function gameWin(): void {

        gamestatus = 1;
        for (let i: number = 0; i < zahnZahl; i++) {
            zaehne.splice(i, 1);
        }
        for (let j: number = 0; j < rechnungZahl; j++) {
            rechnungen.splice(j, 1);
        }

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, 400, 300);
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 400, 300);


        crc2.font = "Arial";
        crc2.fillStyle = "white";
        crc2.fillText("Gewonnen!", 170, 100);
        crc2.fillText("Oma kann wieder lachen!", 130, 150);

        // Oma im Winscreen
        //Kopf
        crc2.beginPath();
        crc2.arc(200, 230, 30, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();

        //Augen
        crc2.beginPath();
        crc2.arc(190, 220, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(210, 220, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(210, 220, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(190, 220, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();

        //Mund
        crc2.beginPath();
        crc2.moveTo(190, 240);
        crc2.lineTo(210, 240);
        crc2.lineTo(210, 250);
        crc2.lineTo(190, 250);
        crc2.lineTo(190, 240);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        //Haare
        crc2.beginPath();
        crc2.arc(200, 180, 10, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(200, 210, 22, 3, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        //Laiberl
        crc2.beginPath();
        crc2.moveTo(200, 260);
        crc2.lineTo(230, 310);
        crc2.lineTo(170, 310);
        crc2.moveTo(200, 260);
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();


        startButton();

        let konfettiAnzahl: number = 100;

        for (let i: number = 0; i < konfettiAnzahl; i++) {
            let k: Konfetti = new Konfetti(0 + Math.random() * 400, 0 + Math.random() * 300, "red");
            abschlussaufgabe.push(k); //Haut on in den Array rein 
        }
        image = crc2.getImageData(0, 0, 400, 300);
    }




}