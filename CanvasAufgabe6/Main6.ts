namespace canvasaufgabe6 {

    export class Main {
        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;

        }

        draw(): void { };

        move(): void { };
    }
}