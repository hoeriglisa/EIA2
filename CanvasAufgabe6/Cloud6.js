var canvasaufgabe6;
(function (canvasaufgabe6) {
    class Cloud extends canvasaufgabe6.Main {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x - 10, this.y, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x - 20, this.y + 5, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.arc(this.x + 10, this.y + 5, 20, 0, 2 * Math.PI);
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
        }
        move() {
            if (this.x > 600) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        }
    }
    canvasaufgabe6.Cloud = Cloud;
})(canvasaufgabe6 || (canvasaufgabe6 = {}));
//# sourceMappingURL=Cloud6.js.map