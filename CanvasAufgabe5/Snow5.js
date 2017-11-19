var canvasaufgabe5;
(function (canvasaufgabe5) {
    class SnowClass {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        drawSnow() {
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
        }
        moveSnow() {
            if (this.y > 583) {
                this.y = 0;
            }
            this.y += Math.random();
            this.drawSnow();
        }
    }
    canvasaufgabe5.SnowClass = SnowClass;
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Snow5.js.map