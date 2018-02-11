namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    document.addEventListener("keydown", pressingKey);
    export let crc2: CanvasRenderingContext2D;
    var image: ImageData;
    let abschlussaufgabe: Semesteraufgabe[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 400, 300);
        


        let n = 5;

        for (let i: number = 0; i < 1; i++) {
            let o: Omi = new Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(o);
        };

        for (let i: number = 0; i < n; i++) {
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
    
    function pressingKey(_event: KeyboardEvent) {
        if  (_event.keyCode == 40) {
             downKey = true;
             Omi.move();
         };}
// Was fehlt: Steuerung, Responsive Design, Eigenschaft des Einsammelns/Game Over

       }