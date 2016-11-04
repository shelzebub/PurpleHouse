function houseFront() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#61316f";
    ctx.fillRect(100, 200, 175, 125);
    ctx.fillStyle = "#582567";
    ctx.moveTo(275, 200);
    ctx.lineTo(325, 150);
    ctx.lineTo(325, 275);
    ctx.lineTo(275, 325);
    ctx.closePath();
    ctx.fill();

}

function houseBack() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#6a317b";
    ctx.fillRect(150, 150, 175, 125);
    ctx.moveTo(100, 200);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 275);
    ctx.lineTo(100, 325);
    ctx.closePath();
    ctx.fill();

}

function roofArc() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#514d52";
    ctx.beginPath();
    ctx.arc(187.5, 200, 100, Math.PI * 1, 0, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(237.5, 150, 100, Math.PI * 1, 0, false);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#443f45";;
    ctx.beginPath();
    ctx.moveTo(287.5,200);
    ctx.lineTo(337.5,150);
    ctx.arc(237.5, 150, 100, 0, (Math.PI* 5 /4), true);
    ctx.arc(187.5, 200, 100, (Math.PI* 5 /4), 0, false);
    ctx.closePath();
    ctx.fill();
}

function main() {
    //Run main program here.

    houseBack();
    houseFront();
    roofArc();


}