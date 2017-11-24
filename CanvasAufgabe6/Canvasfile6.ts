/* Aufgabe: 5
    Name: Lisa San Martin H�rig
    Matrikel: 256060
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace canvasaufgabe6 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var image: ImageData;
    let snowX: Snow[] = [];
    let cloudX: Cloud[] = [];
    let moveskifahrerX: skifahrer[] = [];
    let treeX: tree[] = [];
    let mainx: Main [] = [];


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

        /**H�tte**/
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

        /**T�r**/
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
            let s: SkifahrerClass = new SkifahrerClass(0, 300, Math.random() * 6 + 1, Math.random() * 6 + 1, "#000000");

            moveskifahrerX[i] = s;
        }

        // Schnee

        for (let i: number = 0; i < 50; i++) {
            let s: SnowClass = new SnowClass(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");

            snowX[i] = s;
        }

        // Clouds
        for (let i: number = 0; i < 2; i++) {
            let s: CloudClass = new CloudClass(0 + Math.random() * 600, 100, "#ffffff");

            cloudX[i] = s;
        }
        //B�ume
        for (let i: number = 0; i < 10; i++) {
            let s: TreeClass = new TreeClass(10 + Math.random() * 300, 400 + Math.random() * 100, "#0a5108");

            tree[i] = s;
        }



        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate(): void {
        crc2.putImageData(image, 0, 0);

        //Schnee
        for (let i: number = 0; i < snowX.length; i++) {
            let s: SnowClass = snowX[i];
            s.moveSnow();
        }



        //Wolken
        for (let i: number = 0; i < cloudX.length; i++) {

            let s: CloudClass = cloudX[i];
            s.moveCloud();
        }



        // Skifahrer
        for (let i: number = 0; i < moveskifahrerX.length; i++) {
            let s: SkifahrerClass = moveskifahrerX[i];
            s.move();
        }

        // B�umchen

        for (let i: number = 0; i < tree.length; i++) {
            let s: TreeClass = tree[i];
            s.drawTree();
        }


        window.setTimeout(animate, 20);


    }


}
