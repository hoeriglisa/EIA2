var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Konfetti extends Abschlussaufgabe.Semesteraufgabe {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.strokeStyle = this.color;
            Abschlussaufgabe.crc2.stroke();
        }
        move() {
            if (this.y > 583) {
                this.y = 0;
            }
            this.y += Math.random();
        }
    }
    Abschlussaufgabe.Konfetti = Konfetti;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Konfetti.js.map