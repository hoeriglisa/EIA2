var canvasaufgabe5;
(function (canvasaufgabe5) {
    class CloudClass {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.color = _color;
            this.y = _y;
        }
        drawCloud() {
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x - 10, this.y, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x - 20, this.y + 5, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.arc(this.x + 10, this.y + 5, 20, 0, 2 * Math.PI);
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
        }
        moveCloud() {
            if (this.x > 600) {
                this.x = 0;
            }
            this.x += Math.random();
            this.drawCloud();
        }
    }
    canvasaufgabe5.CloudClass = CloudClass;
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Cloud5.js.map