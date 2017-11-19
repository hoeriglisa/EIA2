/* Aufgabe: 5
    Name: Lisa San Martin Hörig
    Matrikel: 256060
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace canvasaufgabe5 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var image: ImageData;
    let SnowX: SnowClass[] = [];
    let CloudX: CloudClass[] = [];
    let moveskifahrerX: SkifahrerClass[] = [];
    let Tree: TreeClass[] = [];


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#b2e3f4";
        crc2.fillRect(0, 0, 800, 600);

        /** Berg **/
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        /** Lift **/
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 500);
        crc2.stroke();

        /**Hütte**/
        crc2.beginPath();
        crc2.moveTo(350, 510);
        crc2.lineTo(450, 510);
        crc2.lineTo(450, 580);
        crc2.lineTo(350, 580);
        crc2.lineTo(350, 510);
        crc2.stroke();
        crc2.fillStyle = "#502107";
        crc2.fill();

        /**Dach**/
        crc2.beginPath();
        crc2.moveTo(400, 450);
        crc2.lineTo(450, 510);
        crc2.lineTo(350, 510);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#d30e0e";
        crc2.fill();

        /**Tür**/
        crc2.beginPath();
        crc2.moveTo(370, 530);
        crc2.lineTo(400, 530);
        crc2.lineTo(400, 580);
        crc2.lineTo(370, 580);
        crc2.lineTo(370, 530);
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();

        /**Fenster**/
        crc2.beginPath();
        crc2.moveTo(405, 530);
        crc2.lineTo(440, 530);
        crc2.lineTo(440, 560);
        crc2.lineTo(405, 560);
        crc2.lineTo(405, 530);
        crc2.stroke();
        crc2.fillStyle = "#e8f1f4";
        crc2.fill();

        /**Sonne**/
        crc2.beginPath();
        crc2.arc(400, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#f6ff00";
        crc2.fill();
        crc2.strokeStyle = "#f6ff00";
        crc2.stroke();

        //Fahrer
        for (let i: number = 0; i < 5; i++) {
            let s: SkifahrerClass = new SkifahrerClass(0, 150, Math.random() * 6 + 1, Math.random() * 6 + 1, "#ff0000");

            moveskifahrerX[i] = s;
        }

        // Schnee

        for (let i: number = 0; i < 50; i++) {
            let s: SnowClass = new SnowClass(0 + Math.random() * 800, 0 + Math.random() * 600, "#ff0000");

            SnowX[i] = s;
        }

        // Clouds
        for (let i: number = 0; i < 2; i++) {
            let s: CloudClass = new CloudClass(0 + Math.random() * 600, 200, "#00ff00");

            CloudX[i] = s;
        }
        //Bäume
        for (let i: number = 0; i < 10; i++) {
            let s: TreeClass = new TreeClass(80 + Math.random() * 200, 600 + Math.random() * 100, "#0000ff");

            Tree[i] = s;
        }

    

    image = crc2.getImageData(0, 0, 800, 600);
    animate();
}
    function animate(): void {
        crc2.putImageData(image, 0, 0);

        //Schnee
        for (let i: number = 0; i < SnowX.length; i++) {
            let s: SnowClass = SnowX[i];
            s.moveSnow();
        }



        //Wolken
        for (let i: number = 0; i < CloudX.length; i++) {

            let s: CloudClass = CloudX[i];
            s.moveCloud();
        }



        // Skifahrer
        for (let i: number = 0; i < moveskifahrerX.length; i++) {
            let s: SkifahrerClass = moveskifahrerX[i];
            s.move();
        }

        // Bäumchen

        for (let i: number = 0; i < Tree.length; i++) {
            let s: TreeClass = Tree[i];
            s.drawTree();
        }


        window.setTimeout(animate, 20);


}

    
}
