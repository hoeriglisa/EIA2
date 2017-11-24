namespace canvasaufgabe6 {

    export class Snow extends Main {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.strokeStyle = this.color;
            crc2.stroke();
        }

        move(): void {
            if (this.y > 583) {
                this.y = 0;
            }

            this.y += Math.random();


            this.draw();
        }
    }
}