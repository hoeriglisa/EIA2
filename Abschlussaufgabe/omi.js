var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Omi extends Abschlussaufgabe.Semesteraufgabe {
        constructor(_x, _y, _color /**speedX: number, speedY: number, x: string, y: string**/) {
            super(_x, _y, _color);
            /** this.speedX = speedX;
             this.speedY = speedY;
             this.x = x;
             this.y = y;**/
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "yellow";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "peachpuff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "grey";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "lavender";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 20, this.y - 25, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "peachpuff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 20, this.y - 25, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "peachpuff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 25, this.y - 30);
            Abschlussaufgabe.crc2.lineTo(this.x - 25, this.y - 40);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y - 40);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y - 30);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 15, this.y - 40);
            Abschlussaufgabe.crc2.lineTo(this.x - 15, this.y - 50);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y - 50);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y - 40);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Omi = Omi;
    ;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=omi.js.map