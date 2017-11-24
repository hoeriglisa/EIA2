var canvasaufgabe6;
(function (canvasaufgabe6) {
    class Snow extends canvasaufgabe6.Main {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
        }
        move() {
            if (this.y > 583) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
    }
    canvasaufgabe6.Snow = Snow;
})(canvasaufgabe6 || (canvasaufgabe6 = {}));
//# sourceMappingURL=Snow6.js.map