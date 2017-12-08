namespace aufgabe7 {

    window.addEventListener("load", init);

    var p: string = prompt("Gib eine Zahl zwischen 10 und 100 ein!");


    //Abfrage 
    function init(): void {

        for (let i: number = 0; i < parseInt(p); i++) {

            let y: number = 500 * Math.random();
            let x: number = 500 * Math.random();
            let color: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

            draw(y, x, color);
        }

    }

    function draw(_y: number, _x: number, _color: string): void {
        let o: HTMLElement = document.createElement("div");
        o.style.position = "absolute";
        o.style.backgroundColor = _color;
        o.style.height = "50px";
        o.style.width = "50px";
        o.style.top = _y + "px";
        o.style.right = _x + "px";


        document.body.appendChild(o);
    }

    //    let n: number;
    //  
    //     for (let i: number = 0; i < n; i++) {
    //            var x: number = 0 + Math.random() * 600;
    //            var y: number = 0 + Math.random() *;
    //        }

}