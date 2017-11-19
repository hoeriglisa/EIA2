namespace canvasaufgabe5 {

    export class SnowClass {

        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number, _color: string) {
            this.x += _x;
            this.y += _y;
            this.color += _color;
        }

        drawSnow(): void {
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.strokeStyle = this.color;
            crc2.stroke();
        }

        moveSnow(): void {

            if (this.y > 583) {
                this.y = 0;
            }

            this.y += Math.random();
            
            this.drawSnow();

        }



        }
    }


