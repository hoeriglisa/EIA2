/* Aufgabe: 4
    Name: Lisa San Martin H�rig
    Matrikel: 256060
    Datum: 10.11..2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var canvasaufgabe4;
(function (canvasaufgabe4) {
    window.addEventListener("load", init);
    let crc2;
    var image;
    let arrayX = [];
    let arrayY = [];
    let cloudmovingX = [];
    let cloudmovingY = [];
    ;
    let SBewegen = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
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
        /** Baum 1 rechts unten**/
        crc2.beginPath();
        crc2.moveTo(310, 480);
        crc2.lineTo(350, 590);
        crc2.lineTo(270, 590);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#0a5108";
        crc2.fill();
        /** Baum 2 mittig **/
        crc2.beginPath();
        crc2.moveTo(135, 370);
        crc2.lineTo(100, 480);
        crc2.lineTo(170, 480);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#0a5108";
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
        crc2.stroke;
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
        crc2.stroke;
        crc2.fillStyle = "#000000";
        crc2.fill();
        /**Fenster**/
        crc2.beginPath();
        crc2.moveTo(405, 530);
        crc2.lineTo(440, 530);
        crc2.lineTo(440, 560);
        crc2.lineTo(405, 560);
        crc2.lineTo(405, 530);
        crc2.stroke;
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
            SBewegen[i] = {
                moveskifahrerX: 0 + Math.random() * 30,
                moveskifahrerY: 150 + Math.random() * 200 + 170,
                dx: Math.random() * 6 + 1,
                dy: Math.random() * 6 + 1,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function drawTriangle(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 70);
        crc2.lineTo(_x - 20, _y + 70);
        crc2.closePath();
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#0a5108";
        crc2.fill();
    }
    function drawSnow(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 10, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffffff";
        crc2.fill();
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    function drawcloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 10, _y, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 20, _y + 5, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 10, _y + 10, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 5, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawFahrer(_driver) {
        crc2.beginPath();
        crc2.arc(_driver.moveskifahrerX, _driver.moveskifahrerY, 8, 0, 2 * Math.PI);
        crc2.arc(_driver.moveskifahrerX, _driver.moveskifahrerY + 15, 10, 0, 2 * Math.PI);
        crc2.moveTo(_driver.moveskifahrerX - 15, _driver.moveskifahrerY + 22);
        crc2.lineTo(_driver.moveskifahrerX + 15, _driver.moveskifahrerY + 22);
        crc2.lineTo(_driver.moveskifahrerX + 15, _driver.moveskifahrerY + 25);
        crc2.lineTo(_driver.moveskifahrerX - 15, _driver.moveskifahrerY + 25);
        crc2.lineTo(_driver.moveskifahrerX - 15, _driver.moveskifahrerY + 22);
        crc2.stroke();
        crc2.fillStyle = _driver.color;
        crc2.fill();
    }
    function animate() {
        crc2.putImageData(image, 0, 0);
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
        //Skifahrer
        for (let i = 0; i < SBewegen.length; i++) {
            drawFahrer(SBewegen[i]);
            BewegedichSkifahrer(SBewegen[i]);
        }
        window.setTimeout(animate, 20);
    }
    function BewegedichSkifahrer(_SBewegen) {
        _SBewegen.moveskifahrerX += _SBewegen.dx;
        _SBewegen.moveskifahrerY += _SBewegen.dy;
        crc2.fillStyle += _SBewegen.color;
    }
})(canvasaufgabe4 || (canvasaufgabe4 = {}));
//# sourceMappingURL=Canvasfile4.js.map