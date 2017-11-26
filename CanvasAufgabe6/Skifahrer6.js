var canvasaufgabe6;
(function (canvasaufgabe6) {
    class Skifahrer extends canvasaufgabe6.Main {
        constructor(_x, _y, _color, _dx, _dy) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.dy = _dy;
        }
        draw() {
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.arc(this.x, this.y + 15, 10, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.moveTo(this.x - 15, this.y + 22);
            canvasaufgabe6.crc2.lineTo(this.x + 15, this.y + 22);
            canvasaufgabe6.crc2.lineTo(this.x + 15, this.y + 25);
            canvasaufgabe6.crc2.lineTo(this.x - 15, this.y + 25);
            canvasaufgabe6.crc2.lineTo(this.x - 15, this.y + 22);
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
        }
        move() {
            if (this.x > 600) {
                this.x = 0;
                this.y = 250;
            }
            if (this.y > 800) {
                this.y = 250;
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    canvasaufgabe6.Skifahrer = Skifahrer;
})(canvasaufgabe6 || (canvasaufgabe6 = {}));
//# sourceMappingURL=Skifahrer6.js.map