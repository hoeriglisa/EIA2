var canvasaufgabe5;
(function (canvasaufgabe5) {
    class SkifahrerClass {
        constructor(_moveskifahrerX, _moveskifahrerY, _dx, _dy, _color) {
            this.moveskifahrerX = _moveskifahrerX;
            this.moveskifahrerY = _moveskifahrerY;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        drawFahrer() {
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.moveskifahrerX, this.moveskifahrerY, 8, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.arc(this.moveskifahrerX, this.moveskifahrerY + 15, 10, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.moveTo(this.moveskifahrerX - 15, this.moveskifahrerY + 22);
            canvasaufgabe5.crc2.lineTo(this.moveskifahrerX + 15, this.moveskifahrerY + 22);
            canvasaufgabe5.crc2.lineTo(this.moveskifahrerX + 15, this.moveskifahrerY + 25);
            canvasaufgabe5.crc2.lineTo(this.moveskifahrerX - 15, this.moveskifahrerY + 25);
            canvasaufgabe5.crc2.lineTo(this.moveskifahrerX - 15, this.moveskifahrerY + 22);
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
        }
        move() {
            if (this.moveskifahrerX > 600) {
                this.moveskifahrerX = 0;
                this.moveskifahrerY = 250;
            }
            if (this.moveskifahrerY > 800) {
                this.moveskifahrerY = 250;
                this.moveskifahrerX = 0;
            }
            this.moveskifahrerX += this.dx;
            this.moveskifahrerY += this.dy;
            this.drawFahrer();
        }
    }
    canvasaufgabe5.SkifahrerClass = SkifahrerClass;
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Skifahrer5.js.map