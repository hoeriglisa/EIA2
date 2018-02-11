var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Rechnung extends Abschlussaufgabe.Semesteraufgabe {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 30, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 30, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "white";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 5, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y + 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y + 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y + 5);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 5, this.y + 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y + 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y + 20);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y + 20);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y + 15);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
        }
        move() {
            if (this.y > 583) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
    }
    Abschlussaufgabe.Rechnung = Rechnung;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=rechnung.js.map