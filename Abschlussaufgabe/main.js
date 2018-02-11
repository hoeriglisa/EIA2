var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var image;
    let abschlussaufgabe = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        buttondraw();
        //let n = 5;
        for (let i = 0; i < 1; i++) {
            let omma = new Abschlussaufgabe.Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(omma);
        }
        for (let i = 0; i < 5; i++) {
            let z = new Abschlussaufgabe.Zahn(0 + Math.random() * 250, 0 + Math.random() * 200, "#ffffff");
            abschlussaufgabe.push(z);
        }
        let o = 15;
        for (let i = 0; i < o; i++) {
            let r = new Abschlussaufgabe.Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            abschlussaufgabe.push(r); //Haut on in den Array rein 
        }
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 400, 300);
        animate();
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < abschlussaufgabe.length; i++) {
            let s = abschlussaufgabe[i];
            s.update(); //superklasse geupdated
        }
        window.setTimeout(animate, 20);
    }
    /**function pressingKey(_event: KeyboardEvent) {
        switch (_event.keyCode) {
            case 37:
                alert("left");
                break;
            case 38:
                alert("up");
                break;
            case 39:
                alert("right");
                break;
            case 40:
                alert("down");
                break;
        }
    };**/
    /** if  (_event.keyCode == 40) {
          downKey = true;
          Omi.move();
      };}
// Was fehlt: Steuerung, Eigenschaft des Einsammelns/Game Over

    }**/
    function buttondraw() {
        let buttonup = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "65%";
        buttonup.style.left = "40%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", test);
        document.body.appendChild(buttonup);
        let buttonleft = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "73%";
        buttonleft.style.left = "25%";
        buttonleft.style.height = "8%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", test);
        document.body.appendChild(buttonleft);
        let buttonright = document.createElement("button");
        buttonright.innerText = "DOWN";
        buttonright.style.position = "absolute";
        buttonright.style.top = "81%";
        buttonright.style.left = "40%";
        buttonright.style.height = "8%";
        buttonright.style.width = "25%";
        buttonright.id = "ButtonDown";
        buttonright.addEventListener("click", test);
        document.body.appendChild(buttonright);
        let buttondown = document.createElement("button");
        buttondown.innerText = "RIGHT";
        buttondown.style.position = "absolute";
        buttondown.style.top = "73%";
        buttondown.style.left = "55%";
        buttondown.style.height = "8%";
        buttondown.id = "ButtonRight";
        buttondown.addEventListener("click", test);
        document.body.appendChild(buttondown);
    }
    function test() {
        prompt("es erkennt den button - juhu!");
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map