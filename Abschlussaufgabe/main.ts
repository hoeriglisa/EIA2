namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    //document.addEventListener("keydown", pressingKey);
    export let crc2: CanvasRenderingContext2D;
    var image: ImageData;
    let abschlussaufgabe: Semesteraufgabe[] = [];


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 400, 300);
        
        buttondraw();
    
        
      
        //let n = 5;

        for (let i: number = 0; i < 1; i++) {
            let omma: Omi = new Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(omma);
        }

        for (let i: number = 0; i < 5; i++) {
            let z: Zahn = new Zahn(0 + Math.random() * 250, 0 + Math.random() * 200, "#ffffff");
            abschlussaufgabe.push(z);
        }

        let o: number = 15;

        for (let i: number = 0; i < o; i++) {
            let r: Rechnung = new Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            abschlussaufgabe.push(r); //Haut on in den Array rein 
        }
        image = crc2.getImageData(0, 0, 400, 300);
        animate();
    }

    function animate(): void {
        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < abschlussaufgabe.length; i++) {

            let s: Semesteraufgabe = abschlussaufgabe[i];
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
    function buttondraw(): void {
        let buttonup: HTMLButtonElement = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "65%";
        buttonup.style.left = "40%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", test);
        document.body.appendChild(buttonup);

        let buttonleft: HTMLButtonElement = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "73%";
        buttonleft.style.left = "25%";
        buttonleft.style.height = "8%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", test);
        document.body.appendChild(buttonleft);

        let buttonright: HTMLButtonElement = document.createElement("button");
        buttonright.innerText = "DOWN";
        buttonright.style.position = "absolute";
        buttonright.style.top = "81%";
        buttonright.style.left = "40%";
        buttonright.style.height = "8%";
        buttonright.style.width = "25%";
        buttonright.id = "ButtonDown";
        buttonright.addEventListener("click", test);
        document.body.appendChild(buttonright);

        let buttondown: HTMLButtonElement = document.createElement("button");
        buttondown.innerText = "RIGHT";
        buttondown.style.position = "absolute";
        buttondown.style.top = "73%";
        buttondown.style.left = "55%";
        buttondown.style.height = "8%";
        buttondown.id = "ButtonRight";
        buttondown.addEventListener("click", test);
        document.body.appendChild(buttondown);

    }


    function test(): void {
        prompt("es erkennt den button - juhu!");
    }

   

}