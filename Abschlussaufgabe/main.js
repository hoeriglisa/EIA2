var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var image;
    let abschlussaufgabe = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 400, 300);
        let n = 5;
        for (let i = 0; i < 1; i++) {
            let o = new Abschlussaufgabe.Omi(200, 250, "#ffffff");
            abschlussaufgabe.push(o);
        }
        ;
        for (let i = 0; i < n; i++) {
            let z = new Abschlussaufgabe.Zahn(0 + Math.random() * 250, 0 + Math.random() * 200, "#ffffff");
            abschlussaufgabe.push(z);
        }
        let o = 15;
        for (let i = 0; i < o; i++) {
            let r = new Abschlussaufgabe.Rechnung(0 + Math.random() * 800, 0 + Math.random() * 600, "#ffffff");
            abschlussaufgabe.push(r); //Haut on in den Array rein 
        }
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 400, 300);
        animate();
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < abschlussaufgabe.length; i++) {
            let s = abschlussaufgabe[i];
            s.update(); //superklasse geupdated
        }
        window.setTimeout(animate, 20);
    }
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", test);
    function test() {
        alert("es erkennt den button - juhu!");
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map