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

function main() {
    //Run main program here.
    //    houseSides();
    houseBack();
    houseFront();
    
}