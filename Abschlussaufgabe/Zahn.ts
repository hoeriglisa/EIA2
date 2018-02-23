namespace Abschlussaufgabe {


    export class Zahn extends Semesteraufgabe {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }


        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 15, this.y + 3);
            crc2.lineTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 30, this.y + 30);
            crc2.lineTo(this.x + 20, this.y + 20);
            crc2.lineTo(this.x + 15, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 20);
            crc2.lineTo(this.x, this.y + 30);
            crc2.lineTo(this.x, this.y);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
        }
       

    }



}
