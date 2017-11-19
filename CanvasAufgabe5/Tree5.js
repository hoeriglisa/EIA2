var canvasaufgabe5;
(function (canvasaufgabe5) {
    class TreeClass {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        drawTree() {
            canvasaufgabe5.crc2.beginPath();
            canvasaufgabe5.crc2.moveTo(this.x, this.y);
            canvasaufgabe5.crc2.lineTo(this.x + 20, this.y + 70);
            canvasaufgabe5.crc2.lineTo(this.x - 20, this.y + 70);
            canvasaufgabe5.crc2.closePath();
            canvasaufgabe5.crc2.strokeStyle = this.color;
            canvasaufgabe5.crc2.stroke();
            canvasaufgabe5.crc2.fillStyle = this.color;
            canvasaufgabe5.crc2.fill();
        }
    }
    canvasaufgabe5.TreeClass = TreeClass;
})(canvasaufgabe5 || (canvasaufgabe5 = {}));
//# sourceMappingURL=Tree5.js.map