namespace canvasaufgabe6 {

    export class Cloud extends Main {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 20, this.y + 5, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 5, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
        }

        move(): void {
            if (this.x > 600) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        }
    }

}