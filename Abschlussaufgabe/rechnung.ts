namespace Abschlussaufgabe {


    export class Rechnung extends Semesteraufgabe {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }


        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 30, this.y + 30);
            crc2.lineTo(this.x, this.y + 30);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 5);
            crc2.lineTo(this.x + 25, this.y + 5);
            crc2.lineTo(this.x + 25, this.y + 10);
            crc2.lineTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 15);
            crc2.lineTo(this.x + 25, this.y + 15);
            crc2.lineTo(this.x + 25, this.y + 20);
            crc2.lineTo(this.x + 5, this.y + 20);
            crc2.lineTo(this.x + 5, this.y + 15);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
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