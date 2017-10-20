/* Aufgabe: 1
    Name: Lisa San Martin Hörig
    Matrikel: 256060
    Datum: 14.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */


window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    crc2.fillStyle = "#b2e3f4";
    crc2.fillRect(0, 0, 800, 600);

    /** Berg **/
    crc2.beginPath();
    crc2.moveTo(0, 200);
    crc2.lineTo(800, 600);
    crc2.lineTo (0,600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill();
    
    /** Baum 1 rechts unten**/
    crc2.beginPath();
    crc2.moveTo(310, 480);
    crc2.lineTo(350, 590);
    crc2.lineTo (270,590);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle="#0a5108";
    crc2.fill();
    
    /** Baum 2 mittig **/
     crc2.beginPath();
    crc2.moveTo(135, 370);
    crc2.lineTo(100, 480);
    crc2.lineTo (170,480);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle="#0a5108";
    crc2.fill();
    
    /** Lift **/
    crc2.beginPath ();
    crc2.moveTo(0,100);
    crc2.lineTo(800,500);
    crc2.stroke();

    /**Hütte**/
    crc2.beginPath();
    crc2.moveTo(350,510);
    crc2.lineTo(450,510);
    crc2.lineTo(450,580);
    crc2.lineTo(350,580);
    crc2.lineTo(350,510);
    crc2.stroke
    crc2.fillStyle="#502107";
    crc2.fill ();
    
    /**Dach**/
    crc2.beginPath();
    crc2.moveTo(400, 450);
    crc2.lineTo(450, 510);
    crc2.lineTo (350,510);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle="#d30e0e";
    crc2.fill();
    
    /**Tür**/
   crc2.beginPath();
    crc2.moveTo(370,530);
    crc2.lineTo(400,530);
    crc2.lineTo(400,580);
    crc2.lineTo(370,580);
    crc2.lineTo(370,530);
    crc2.stroke
    crc2.fillStyle="#000000";
    crc2.fill ();
   
    /**Fenster**/
    crc2.beginPath();
    crc2.moveTo(405,530);
    crc2.lineTo(440,530);
    crc2.lineTo(440,560);
    crc2.lineTo(405,560);
    crc2.lineTo(405,530);
    crc2.stroke
    crc2.fillStyle="#e8f1f4";
    crc2.fill ();
    
    /**Sonne**/
    crc2.beginPath();
    crc2.arc(400,75,50,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#f6ff00";
    crc2.fill ();
    crc2.strokeStyle="#f6ff00";
    crc2.stroke();
    
    /**Wolke**/
    crc2.beginPath();
    crc2.arc(300,50,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
    
     crc2.beginPath();
    crc2.arc(290,50,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
    
    crc2.beginPath();
    crc2.arc(280,55,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
    
     crc2.beginPath();
    crc2.arc(290,60,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
    
      crc2.beginPath();
    crc2.arc(300,60,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
    
    crc2.beginPath();
    crc2.arc(310,55,20,0,2*Math.PI);
    crc2.strokeStyle="#ffffff";
    crc2.stroke();
    crc2.fillStyle="#ffffff";
    crc2.fill ();
}