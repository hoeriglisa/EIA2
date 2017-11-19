namespace canvasaufgabe5 {

    export class CloudClass {

        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.color = _color;
            this.y = _y;
        }

        drawCloud(): void {


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
            moveCloud(): void {

                if(this.x > 600) {
                this.x = 0;
            }
            this.x += Math.random();
            this.drawCloud();
        }
    }


}