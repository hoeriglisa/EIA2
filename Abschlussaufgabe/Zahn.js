var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Zahn extends Abschlussaufgabe.Semesteraufgabe {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y + 3);
            Abschlussaufgabe.crc2.lineTo(this.x + 30, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 30, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x + 20, this.y + 20);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x + 10, this.y + 20);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "white";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Zahn = Zahn;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Zahn.js.map