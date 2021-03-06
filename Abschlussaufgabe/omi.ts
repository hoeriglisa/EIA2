namespace Abschlussaufgabe {

    export class Omi extends Semesteraufgabe {

        constructor(_x: number, _y: number, _color: string /**speedX: number, speedY: number, x: string, y: string**/) {
            super(_x, _y, _color);
           /** this.speedX = speedX;
            this.speedY = speedY;
            this.x = x;
            this.y = y;**/
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "peachpuff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "lavender";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 20, this.y - 25, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "peachpuff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 25, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "peachpuff";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - 25, this.y - 30);
            crc2.lineTo(this.x - 25, this.y - 40);
            crc2.lineTo(this.x + 25, this.y - 40);
            crc2.lineTo(this.x + 25, this.y - 30);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 40);
            crc2.lineTo(this.x - 15, this.y - 50);
            crc2.lineTo(this.x + 15, this.y - 50);
            crc2.lineTo(this.x + 15, this.y - 40);
            crc2.strokeStyle = "black";
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
        }


       /** Hier k�nnte auch die move Funktion von Oma als Erweiterung der Subklasse stehen.
        Als Superklasse h�tte sie wenig Sinn gemacht, da sich die Z�hne nicht bewegen. 
        Da dies jedoch nicht funktioniert hat, habe ich sie in die main Datei verpackt.
       **/
        };
    }
    





