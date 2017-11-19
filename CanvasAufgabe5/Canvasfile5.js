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
    let SnowX = [];
    let CloudX = [];
    let moveskifahrerX = [];
    let Tree = [];
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
        canvasaufgabe5.crc2.stroke();
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
        canvasaufgabe5.crc2.stroke();
        canvasaufgabe5.crc2.fillStyle = "#000000";
        canvasaufgabe5.crc2.fill();
        /**Fenster**/
        canvasaufgabe5.crc2.beginPath();
        canvasaufgabe5.crc2.moveTo(405, 530);
        canvasaufgabe5.crc2.lineTo(440, 530);
        canvasaufgabe5.crc2.lineTo(440, 560);
        canvasaufgabe5.crc2.lineTo(405, 560);
        canvasaufgabe5.crc2.lineTo(405, 530);
        canvasaufgabe5.crc2.stroke();
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
        //Fahrer
        for (let i = 0; i < 5; i++) {
            let s = new canvasaufgabe5.SkifahrerClass(0, 150, Math.random() * 6 + 1, Math.random() * 6 + 1, "#ff0000");
            moveskifahrerX[i] = s;
        }
        // Schnee
        for (let i = 0; i < 50; i++) {
            let s = new canvasaufgabe5.SnowClass(0 + Math.random() * 800, 0 + Math.random() * 600, "#ff0000");
            SnowX[i] = s;
        }
        // Clouds
        for (let i = 0; i < 2; i++) {
            let s = new canvasaufgabe5.CloudClass(0 + Math.random() * 600, 200, "#00ff00");
            CloudX[i] = s;
        }
        //B�ume
        for (let i = 0; i < 10; i++) {
            let s = new canvasaufgabe5.TreeClass(80 + Math.random() * 200, 600 + Math.random() * 100, "#0000ff");
            Tree[i] = s;
        }
        image = canvasaufgabe5.crc2.getImageData(0, 0, 800, 600);
        animate();
        function animate() {
            canvasaufgabe5.crc2.putImageData(image, 0, 0);
            //Schnee
            for (let i = 0; i < SnowX.length; i++) {
                let s = SnowX[i];
                s.moveSnow();
            }
            //Wolken
            for (let i = 0; i < CloudX.length; i++) {
                let s = CloudX[i];
                s.moveCloud();
            }
            // Skifahrer
            for (let i = 0; i < moveskifahrerX.length; i++) {
                let s = moveskifahrerX[i];
                s.move();
            }
            // B�umchen
            for (let i = 0; i < Tree.length; i++) {
                let s = Tree[i];
                s.drawTree();
            }
            window.setTimeout(animate, 20);
        }
    }
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Canvasfile5.js.map