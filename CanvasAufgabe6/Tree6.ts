namespace canvasaufgabe6 {

    export class Tree extends Main {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }
        
        
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y + 70);
            crc2.lineTo(this.x - 20, this.y + 70);
            crc2.closePath();
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
            }

    }
}