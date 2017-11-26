/* Aufgabe: 5
    Name: Lisa San Martin H�rig
    Matrikel: 256060
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var canvasaufgabe6;
(function (canvasaufgabe6) {
    window.addEventListener("load", init);
    var image;
    let mainx = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvasaufgabe6.crc2 = canvas.getContext("2d");
        let n = 5;
        console.log(canvasaufgabe6.crc2);
        canvasaufgabe6.crc2.fillStyle = "#b2e3f4";
        canvasaufgabe6.crc2.fillRect(0, 0, 800, 600);
        /** Berg **/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(0, 200);
        canvasaufgabe6.crc2.lineTo(800, 600);
        canvasaufgabe6.crc2.lineTo(0, 600);
        canvasaufgabe6.crc2.closePath();
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#ffffff";
        canvasaufgabe6.crc2.fill();
        /** Lift **/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(0, 100);
        canvasaufgabe6.crc2.lineTo(800, 500);
        canvasaufgabe6.crc2.stroke();
        /**H�tte**/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(350, 510);
        canvasaufgabe6.crc2.lineTo(450, 510);
        canvasaufgabe6.crc2.lineTo(450, 580);
        canvasaufgabe6.crc2.lineTo(350, 580);
        canvasaufgabe6.crc2.lineTo(350, 510);
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#502107";
        canvasaufgabe6.crc2.fill();
        /**Dach**/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(400, 450);
        canvasaufgabe6.crc2.lineTo(450, 510);
        canvasaufgabe6.crc2.lineTo(350, 510);
        canvasaufgabe6.crc2.closePath();
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#d30e0e";
        canvasaufgabe6.crc2.fill();
        /**T�r**/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(370, 530);
        canvasaufgabe6.crc2.lineTo(400, 530);
        canvasaufgabe6.crc2.lineTo(400, 580);
        canvasaufgabe6.crc2.lineTo(370, 580);
        canvasaufgabe6.crc2.lineTo(370, 530);
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#000000";
        canvasaufgabe6.crc2.fill();
        /**Fenster**/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.moveTo(405, 530);
        canvasaufgabe6.crc2.lineTo(440, 530);
        canvasaufgabe6.crc2.lineTo(440, 560);
        canvasaufgabe6.crc2.lineTo(405, 560);
        canvasaufgabe6.crc2.lineTo(405, 530);
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#e8f1f4";
        canvasaufgabe6.crc2.fill();
        /**Sonne**/
        canvasaufgabe6.crc2.beginPath();
        canvasaufgabe6.crc2.arc(400, 75, 50, 0, 2 * Math.PI);
        canvasaufgabe6.crc2.stroke();
        canvasaufgabe6.crc2.fillStyle = "#f6ff00";
        canvasaufgabe6.crc2.fill();
        canvasaufgabe6.crc2.strokeStyle = "#f6ff00";
        canvasaufgabe6.crc2.stroke();
        //Fahrer
        for (let i = 0; i < n; i++) {
            let s = new canvasaufgabe6.Skifahrer(0, 300, "#000000", Math.random() * 6 + 1, Math.random() * 6 + 1);
            mainx.push(s);
            let c = new canvasaufgabe6.Cloud(0 + Math.random() * 600, 100, "#ffffff");
            mainx.push(c);
            let t = new canvasaufgabe6.Tree(10 + Math.random() * 300, 400 + Math.random() * 100, "#0a5108");
            mainx.push(t);
        }
        let o = 100;
        for (let i = 0; i < o; i++) {
            let on = new canvasaufgabe6.Snow(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            mainx.push(on);
        }
        image = canvasaufgabe6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        canvasaufgabe6.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < mainx.length; i++) {
            let s = mainx[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(canvasaufgabe6 || (canvasaufgabe6 = {}));
//# sourceMappingURL=Canvasfile6.js.map