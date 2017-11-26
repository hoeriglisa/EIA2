var canvasaufgabe6;
(function (canvasaufgabe6) {
    class Tree extends canvasaufgabe6.Main {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            canvasaufgabe6.crc2.beginPath();
            canvasaufgabe6.crc2.moveTo(this.x, this.y);
            canvasaufgabe6.crc2.lineTo(this.x + 20, this.y + 70);
            canvasaufgabe6.crc2.lineTo(this.x - 20, this.y + 70);
            canvasaufgabe6.crc2.closePath();
            canvasaufgabe6.crc2.strokeStyle = this.color;
            canvasaufgabe6.crc2.stroke();
            canvasaufgabe6.crc2.fillStyle = this.color;
            canvasaufgabe6.crc2.fill();
        }
    }
    canvasaufgabe6.Tree = Tree;
})(canvasaufgabe6 || (canvasaufgabe6 = {}));
//# sourceMappingURL=Tree6.js.map