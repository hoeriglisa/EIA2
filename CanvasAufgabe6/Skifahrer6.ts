namespace canvasaufgabe6 {
    export class Skifahrer extends Main {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _color: string, _dx: number, _dy: number) {
            super(_x, _y, _color);
            this.dx = _dx;
            this.dy = _dy;
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y + 15, 10, 0, 2 * Math.PI);
            crc2.moveTo(this.x - 15, this.y + 22);
            crc2.lineTo(this.x + 15, this.y + 22);
            crc2.lineTo(this.x + 15, this.y + 25);
            crc2.lineTo(this.x - 15, this.y + 25);
            crc2.lineTo(this.x - 15, this.y + 22);
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

        }

        move(): void {

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


}