var aufgabe7;
(function (aufgabe7) {
    window.addEventListener("load", init);
    var p = prompt("Gib eine Zahl zwischen 10 und 100 ein!");
    //Abfrage 
    function init() {
        for (let i = 0; i < parseInt(p); i++) {
            let y = 500 * Math.random();
            let x = 500 * Math.random();
            let color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            draw(y, x, color);
        }
    }
    function draw(_y, _x, _color) {
        let o = document.createElement("div");
        o.style.position = "absolute";
        o.style.backgroundColor = _color;
        o.style.height = "50px";
        o.style.width = "50px";
        o.style.top = _y + "px";
        o.style.right = _x + "px";
        document.body.appendChild(o); //Mach dem K�rper ein Kind
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=Aufgabe7.js.map