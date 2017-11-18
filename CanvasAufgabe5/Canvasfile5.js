/* Aufgabe: 5
    Name: Lisa San Martin H�rig
    Matrikel: 256060
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var canvasaufgabe5;
(function (canvasaufgabe5) {
    window.addEventListener("load", init);
    var image;
    let arrayX = [];
    let arrayY = [];
    let cloudmovingX = [];
    let cloudmovingY = [];
    let moveskifahrerX = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvasaufgabe5.crc2 = canvas.getContext("2d");
        console.log(canvasaufgabe5.crc2);
        canvasaufgabe5.crc2.fillStyle = "#b2e3f4";
        canvasaufgabe5.crc2.fillRect(0, 0, 800, 600);
        /** Berg **/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(0, 200);
        canvasaufgabe5.crc2.lineTo(800, 600);
        canvasaufgabe5.crc2.lineTo(0, 600);
        canvasaufgabe5.crc2.closePath();
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        /** Baum 1 rechts unten**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(310, 480);
        canvasaufgabe5.crc2.lineTo(350, 590);
        canvasaufgabe5.crc2.lineTo(270, 590);
        canvasaufgabe5.crc2.closePath();
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#0a5108";
        canvasaufgabe5.crc2.fill();
        /** Baum 2 mittig **/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(135, 370);
        canvasaufgabe5.crc2.lineTo(100, 480);
        canvasaufgabe5.crc2.lineTo(170, 480);
        canvasaufgabe5.crc2.closePath();
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#0a5108";
        canvasaufgabe5.crc2.fill();
        /** Lift **/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(0, 100);
        canvasaufgabe5.crc2.lineTo(800, 500);
        canvasaufgabe5.crc2.stroke();
        /**H�tte**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(350, 510);
        canvasaufgabe5.crc2.lineTo(450, 510);
        canvasaufgabe5.crc2.lineTo(450, 580);
        canvasaufgabe5.crc2.lineTo(350, 580);
        canvasaufgabe5.crc2.lineTo(350, 510);
        canvasaufgabe5.crc2.stroke;
        canvasaufgabe5.crc2.fillStyle = "#502107";
        canvasaufgabe5.crc2.fill();
        /**Dach**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(400, 450);
        canvasaufgabe5.crc2.lineTo(450, 510);
        canvasaufgabe5.crc2.lineTo(350, 510);
        canvasaufgabe5.crc2.closePath();
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#d30e0e";
        canvasaufgabe5.crc2.fill();
        /**T�r**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(370, 530);
        canvasaufgabe5.crc2.lineTo(400, 530);
        canvasaufgabe5.crc2.lineTo(400, 580);
        canvasaufgabe5.crc2.lineTo(370, 580);
        canvasaufgabe5.crc2.lineTo(370, 530);
        canvasaufgabe5.crc2.stroke;
        canvasaufgabe5.crc2.fillStyle = "#000000";
        canvasaufgabe5.crc2.fill();
        /**Fenster**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(405, 530);
        canvasaufgabe5.crc2.lineTo(440, 530);
        canvasaufgabe5.crc2.lineTo(440, 560);
        canvasaufgabe5.crc2.lineTo(405, 560);
        canvasaufgabe5.crc2.lineTo(405, 530);
        canvasaufgabe5.crc2.stroke;
        canvasaufgabe5.crc2.fillStyle = "#e8f1f4";
        canvasaufgabe5.crc2.fill();
        /**Sonne**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(400, 75, 50, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#f6ff00";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.strokeStyle = "#f6ff00";
        canvasaufgabe5.crc2.stroke();
        drawcloud(x, y);
        /**Wolke**/
        drawTriangle(90, 500);
        drawTriangle(150, 480);
        drawTriangle(80, 430);
        drawTriangle(200, 370);
        //B�umchen
        for (let i = 0; i < 15; i++) {
            var x = 10 + Math.random() * 250;
            var y = 350 + Math.random() * 180;
            drawTriangle(x, y);
        }
        //Wolken
        for (let i = 0; i < 2; i++) {
            cloudmovingX[i] = 0 + Math.random() * 800;
            cloudmovingY[i] = 0 + Math.random() * 100 + 70;
        }
        //Schneeflocken
        for (let i = 0; i < 50; i++) {
            arrayX[i] = 0 + Math.random() * 800;
            arrayY[i] = 0 + Math.random() * 600;
        }
        //Fahrer
        for (let i = 0; i < 5; i++) {
            let s = new canvasaufgabe5.SkifahrerClass(0, 150, Math.random() * 6 + 1, Math.random() * 6 + 1, "#0000");
            moveskifahrerX[i] = s;
        }
    }
    image = canvasaufgabe5.crc2.getImageData(0, 0, 800, 600);
    animate();
    function drawTriangle(_x, _y) {
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(_x, _y);
        canvasaufgabe5.crc2.lineTo(_x + 20, _y + 70);
        canvasaufgabe5.crc2.lineTo(_x - 20, _y + 70);
        canvasaufgabe5.crc2.closePath();
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#0a5108";
        canvasaufgabe5.crc2.fill();
    }
    function drawSnow(_x, _y) {
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x + 10, _y + 10, 5, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.fillStyle = "#ffffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.strokeStyle = "#000000";
        canvasaufgabe5.crc2.stroke();
    }
    function drawcloud(_x, _y) {
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x - 10, _y, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x - 20, _y + 5, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x - 10, _y + 10, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.arc(_x + 10, _y + 5, 20, 0, 2 * Math.PI);
        canvasaufgabe5.crc2.strokeStyle = "#ffffff";
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#ffffff";
        canvasaufgabe5.crc2.fill();
    }
    function animate() {
        canvasaufgabe5.crc2.putImageData(image, 0, 0);
        //Schnee
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 583) {
                arrayY[i] = 0;
            }
            arrayY[i] += Math.random();
            drawSnow(arrayX[i], arrayY[i]);
        }
        //Wolken
        for (let i = 0; i < cloudmovingX.length; i++) {
            if (cloudmovingX[i] > 800) {
                cloudmovingX[i] = 0;
            }
            cloudmovingX[i] += Math.random();
            drawcloud(cloudmovingX[i], cloudmovingY[i]);
        }
        for (let i = 0; i < moveskifahrerX.length; i++) {
            let s = moveskifahrerX[i];
            s.move();
        }
        window.setTimeout(animate, 20);
    }
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Canvasfile5.js.map