namespace canvasaufgabe5 {


    export class SkifahrerClass {
        moveskifahrerX: number;
        moveskifahrerY: number;
        dx: number;
        dy: number;
        color: string;


        constructor(_moveskifahrerX: number, _moveskifahrerY: number, _dx: number, _dy: number, _color: string) {
            this.moveskifahrerX = _moveskifahrerX;
            this.moveskifahrerY = _moveskifahrerY;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }

        updateSkifahrer(): void {
            this.move();
            this.drawFahrer();
        }

        drawFahrer(): void {
            crc2.beginPath();
            crc2.arc(this.moveskifahrerX, this.moveskifahrerY, 8, 0, 2 * Math.PI);
            crc2.arc(this.moveskifahrerX, this.moveskifahrerY + 15, 10, 0, 2 * Math.PI);
            crc2.moveTo(this.moveskifahrerX - 15, this.moveskifahrerY + 22);
            crc2.lineTo(this.moveskifahrerX + 15, this.moveskifahrerY + 22);
            crc2.lineTo(this.moveskifahrerX + 15, this.moveskifahrerY + 25);
            crc2.lineTo(this.moveskifahrerX - 15, this.moveskifahrerY + 25);
            crc2.lineTo(this.moveskifahrerX - 15, this.moveskifahrerY + 22);
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

        }

        move(): void {

            if (this.moveskifahrerX > 600) {
                this.moveskifahrerX = 0;
                this.moveskifahrerY = 250;
            }

            if (this.moveskifahrerY > 800) {
                this.moveskifahrerY = 250;
                this.moveskifahrerX = 0;
            }

            this.moveskifahrerX += this.dx;
            this.moveskifahrerY += this.dy;
            this.drawFahrer();
        }
    }
}