    
    //front house wall
    var xLeft = 150;
    var xRight = 250; 
    var yTop = 275;
    var yBot = 415;
    //transition of house walls facing me
    var xChange = 75; 
    var yChange = 50;
    //tallnedd of triangle part of wall
    var tip = -75;

    //back house wall 
    var xLeft2 = xLeft + xChange;
    var xRight2 = xRight + xChange; 
    var yTop2 = yTop - yChange;
    var yBot2 = yBot - yChange;

    
    //triangle part front wall
    var xTopOfTriangle = ((xRight - xLeft) / 2)+ xLeft;
    var yTopOfTriangle  = yTop + tip;
    
    //triangle partback wall
    var xTopOfTriangle2 = ((xRight2 - xLeft2) / 2)+ xLeft2;
    var yTopOfTriangle2  = yTop2 + tip;
    
    
    

function frontWall() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
  
    //bottom rectangle
    
    
    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.beginPath();
    ctx.moveTo(xLeft,yTop);
    ctx.lineTo(xLeft,yBot);
    ctx.lineTo(xRight,yBot);
    ctx.lineTo(xRight,yTop);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    //triangle part
    
    
    
    ctx.moveTo(xLeft,yTop);
    ctx.lineTo(xTopOfTriangle, yTopOfTriangle);
    ctx.lineTo(xRight,yTop);
    ctx.stroke();
    ctx.fill();
    
    

}

function backWall(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

   
    //bottom rectangle
    
    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.beginPath();
    ctx.moveTo(xLeft2,yTop2);
    ctx.lineTo(xLeft2,yBot2);
    ctx.lineTo(xRight2,yBot2);
    ctx.lineTo(xRight2,yTop2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    //triangle part
    ctx.moveTo(xLeft2,yTop2);
    ctx.lineTo(xTopOfTriangle2, yTopOfTriangle2);
    ctx.lineTo(xRight2,yTop2);
    ctx.stroke()
    ctx.fill();
}


function sideWall(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
    
    ctx.moveTo(xRight, yTop);
    ctx.lineTo(xRight2, yTop2);
    ctx.lineTo(xTopOfTriangle2, yTopOfTriangle2);
    ctx.lineTo(xTopOfTriangle, yTopOfTriangle);
    ctx.stroke();
    


    
    
    
     
}

function main() {
    //Run main program here.

    backWall();
    frontWall();
    //sideWall();
   
    

}


/*

function houseFront() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#61316f";
    ctx.fillRect(100, 200+50, 175, 125);
    ctx.fillStyle = "#582567";
    ctx.moveTo(275, 200+50);
    ctx.lineTo(325, 150+50);
    ctx.lineTo(325, 275+50);
    ctx.lineTo(275, 325+50);
    ctx.closePath();
    ctx.fill();

}

function houseBack() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#6a317b";
    ctx.fillRect(150, 150+50, 175, 125);
    ctx.moveTo(100, 200+50);
    ctx.lineTo(150, 150+50);
    ctx.lineTo(150, 275+50);
    ctx.lineTo(100, 325+50);
    ctx.closePath();
    ctx.fill();

}

function roofArc() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#514d52";
    ctx.beginPath();
    ctx.arc(187.5, 250, 100, Math.PI * 1, 0, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(237.5, 150+50, 100, Math.PI * 1, 0, false);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#443f45";;
    ctx.beginPath();
    ctx.moveTo(287.5,200+50);
    ctx.lineTo(337.5,150+50);
    ctx.arc(237.5, 150+50, 100, 0, (Math.PI* 5 /4), true);
    ctx.arc(187.5, 200+50, 100, (Math.PI* 5 /4), 0, false);
    ctx.closePath();
    ctx.fill();
}



function chimney() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#e574d4";
    ctx.fillRect(155, 100 , 50, 75);
}

function houseDoor(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#aae574";
    ctx.fillRect(155, 300 , 50, 75);
}

function houseBase() {
    houseBack();
    houseFront();
    roofArc();
    houseDoor();
    
}

function main() {
    //Run main program here.

    houseBase();
    chimney();

}

*/