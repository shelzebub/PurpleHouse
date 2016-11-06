    //MAIN BUILDING TEMPLATE
    //front house wall
    var xLeft = 150;
    var xRight = 250;
    var yTop = 275;
    var yBot = 415;
    //transition of house walls facing me
    var xChange = 50;
    var yChange = 50;
    //tallnedd of triangle part of wall
    var tip = -75

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
    //----------------------------------------------------

    //SMALL ENTRANCE BUILDING TEMPLATE
    //front wall
    var xLeftSm = 150+5;
    var xRightSm = 250-5;
    var yTopSm = 178+275*4/7;
    var yBotSm = 178+415*4/7;

    //transition of house walls facing me
    var xChangeSm = -23;
    var yChangeSm = -23;
    //tallnedd of triangle part of wall
    var tipSm = -62;

    //back house wall
    var xLeftSm2 = xLeftSm + xChangeSm;
    var xRightSm2 = xRightSm + xChangeSm;
    var yTopSm2 = yTopSm - yChangeSm;
    var yBotSm2 = yBotSm - yChangeSm;


    //triangle part front wall
    var xTopOfTriangleSm = ((xRightSm - xLeftSm) / 2)+ xLeftSm;
    var yTopOfTriangleSm  = yTopSm + tipSm;

    //triangle partback wall
    var xTopOfTriangleSm2 = ((xRightSm2 - xLeftSm2) / 2)+ xLeftSm2;
    var yTopOfTriangleSm2  = yTopSm2 + tipSm;

    //---------------------------------------------------------



   //roof
    var xMidRoofLeft = ((xRight - xLeft) / 2)+ xLeft -7;
    var yMidRoofLeft = yTop + tip -10;
    var xMidRoofRight = ((xRight - xLeft) / 2)+ xLeft -7 + xChange +5;
    var yMidRoofRight = yTop + tip -10 - yChange -5;
    var xBotLeft = xRight +7;
    var yBotLeft = yTop +10;
    var xBotRight = xBotLeft + xChange +5;
    var yBotRight = yBotLeft - yChange -5;



    //entrance roof
    var xMidRoofLeftEntrance = xMidRoofLeft-15-5;
    var yMidRoofLeftEntrance = yMidRoofLeft+100;
    var xMidRoofRightEntrance = xMidRoofRight-45-5;
    var yMidRoofRightEntrance = yMidRoofRight+130;
    var xBotLeftEntrance = xBotLeft-15;
    var yBotLeftEntrance = yBotLeft+80;
    var xBotRightEntrance = xBotRight-45;
    var yBotRightEntrance = yBotRight+110;






    

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
   // ctx.stroke();
    ctx.closePath();


    //triangle part


   // ctx.beginPath();
    ctx.moveTo(xLeft,yTop);
    ctx.lineTo(xTopOfTriangle, yTopOfTriangle);
    ctx.lineTo(xRight,yTop);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();



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
    //ctx.stroke();
    ctx.closePath();


    //triangle part
    // ctx.beginPath();
    ctx.moveTo(xLeft2,yTop2);
    ctx.lineTo(xTopOfTriangle2, yTopOfTriangle2);
    ctx.lineTo(xRight2,yTop2);
    //ctx.stroke()
    ctx.fill();
    ctx.closePath();
}

function sideBaseRoofRight(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";

    ctx.moveTo(xRight, yTop);
    ctx.lineTo(xRight2, yTop2);
    ctx.lineTo(xTopOfTriangle2, yTopOfTriangle2);
    ctx.lineTo(xTopOfTriangle, yTopOfTriangle);
    ctx.lineTo(xRight, yTop);

    ctx.fill();
    //ctx.stroke();
    ctx.closePath();

}

function sideRoofRight(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    
    ctx.beginPath();
    ctx.fillStyle = "#fdac84";

    ctx.moveTo(xMidRoofLeft, yMidRoofLeft); //bottom left
    ctx.lineTo(xBotLeft-3, yBotLeft);
    ctx.lineTo(xBotRight-3, yBotRight);
    ctx.lineTo(xMidRoofRight,yMidRoofRight+5);
    ctx.lineTo(xMidRoofLeft, yMidRoofLeft+5);
  
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();
    
  ctx.beginPath();
    ctx.moveTo(xMidRoofLeft, yMidRoofLeft); //bottom left
    ctx.lineTo(xBotLeft, yBotLeft);
    ctx.lineTo(xBotRight, yBotRight);
    ctx.lineTo(xMidRoofRight,yMidRoofRight);
    ctx.lineTo(xMidRoofLeft, yMidRoofLeft);

    ctx.fill();
    //ctx.stroke();
    ctx.closePath();

}

function sideBaseRoofLeft(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#fdac84";

    ctx.moveTo(xLeft, yTop);
    ctx.lineTo(xLeft2, yTop2);
    ctx.lineTo(xTopOfTriangle2, yTopOfTriangle2);
    ctx.lineTo(xTopOfTriangle, yTopOfTriangle);
    ctx.lineTo(xLeft, yTop);

    ctx.fill();
    //ctx.stroke();
    ctx.closePath();

}

function sideRoofLeft(){
 
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#d37749";

    ctx.moveTo(xMidRoofLeft, yMidRoofLeft); //bottom left
    ctx.lineTo(xBotLeft-120, yBotLeft);
    ctx.lineTo(xBotRight-120, yBotRight);
    ctx.lineTo(xMidRoofRight,yMidRoofRight);
    ctx.lineTo(xMidRoofLeft, yMidRoofLeft);
    
    
    

    ctx.fill();
   // ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    
   
    ctx.moveTo(xMidRoofLeft, yMidRoofLeft+5); //bottom left
    ctx.lineTo(xBotLeft-120+3, yBotLeft);
    ctx.lineTo(xBotRight-120+3, yBotRight);
    ctx.lineTo(xMidRoofRight,yMidRoofRight+5);
    ctx.lineTo(xMidRoofLeft, yMidRoofLeft);
   

    ctx.fill();
 //   ctx.stroke();
    ctx.closePath();

}

function roofThingy() {
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#fdac84";

    ctx.moveTo(xMidRoofLeft, yMidRoofLeft); //bottom left
    ctx.lineTo(xMidRoofLeft, yMidRoofLeft-10); //top left
    ctx.lineTo(xMidRoofRight, yMidRoofRight-10);
    ctx.lineTo(xMidRoofRight, yMidRoofRight);
    
    ctx.fill();
 //   ctx.stroke();
    ctx.closePath();
}


function sideWallRight(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ce997e";

    ctx.moveTo(xRight, yTop);
    ctx.lineTo(xRight2, yTop2);
    ctx.lineTo(xRight2, yBot2);
    ctx.lineTo(xRight, yBot);
    ctx.lineTo(xRight, yTop);

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();

}

function sideWallLeft(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";

    ctx.moveTo(xLeft, yTop);
    ctx.lineTo(xLeft2, yTop2);
    ctx.lineTo(xLeft2, yBot2);
    ctx.lineTo(xLeft, yBot);
    ctx.lineTo(xLeft, yTop);

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();

}

//------------------------------------------------------------------------
//entrance building
function backWallEntrance() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //bottom rectangle

    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.beginPath();
    ctx.moveTo(xLeftSm,yTopSm);
    ctx.lineTo(xLeftSm,yBotSm);
    ctx.lineTo(xRightSm,yBotSm);
    ctx.lineTo(xRightSm,yTopSm);
    ctx.fill();
//    ctx.stroke();
    ctx.closePath();

    //triangle part

    ctx.beginPath();
    ctx.moveTo(xLeftSm,yTopSm);
    ctx.lineTo(xTopOfTriangleSm, yTopOfTriangleSm);
    ctx.lineTo(xRightSm,yTopSm);
  //  ctx.strokeStyle = "blue";
  //  ctx.stroke();
    //ctx.fill();
    ctx.closePath();
}

function frontWallEntrance() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");


    //bottom rectangle

    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.beginPath();
    ctx.moveTo(xLeftSm2,yTopSm2);
    ctx.lineTo(xLeftSm2,yBotSm2);
    ctx.lineTo(xRightSm2,yBotSm2);
    ctx.lineTo(xRightSm2,yTopSm2);
    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();


    //triangle part
    ctx.beginPath();
    ctx.moveTo(xLeftSm2,yTopSm2);
    ctx.lineTo(xTopOfTriangleSm2, yTopOfTriangleSm2);
    ctx.lineTo(xRightSm2,yTopSm2);
  //  ctx.stroke()
    ctx.fill();
    ctx.closePath();

}

function sideBaseRoofRightEntrance(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";

    ctx.moveTo(xRightSm, yTopSm);
    ctx.lineTo(xRightSm2, yTopSm2);
    ctx.lineTo(xTopOfTriangleSm2, yTopOfTriangleSm2);
    ctx.lineTo(xTopOfTriangleSm, yTopOfTriangleSm);
    ctx.lineTo(xRightSm, yTopSm);

    //ctx.fill();
//    ctx.stroke();
    ctx.closePath();

}

function sideRoofRightEntrance() {
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#fdac84";
    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance); //bottom left
    ctx.lineTo(xBotLeftEntrance-15, yBotLeftEntrance);
    ctx.lineTo(xBotRightEntrance-15, yBotRightEntrance);
    ctx.lineTo(xMidRoofRightEntrance,yMidRoofRightEntrance);
    ctx.lineTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance);
    

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();

}

function sideBaseRoofLeftEntrance(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#d37749";

    
    ctx.moveTo(xLeftSm, yTopSm);
    ctx.lineTo(xLeftSm2, yTopSm2);
    ctx.lineTo(xTopOfTriangleSm2, yTopOfTriangleSm2);
    ctx.lineTo(xTopOfTriangleSm, yTopOfTriangleSm);
    ctx.lineTo(xLeftSm, yTopSm);

    //ctx.fill();
  //  ctx.stroke();
    ctx.closePath();


}

function sideRoofLefttEntrance() {
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#d37749";

    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance); //bottom left
    ctx.lineTo(xBotLeftEntrance-120, yBotLeftEntrance);
    ctx.lineTo(xBotRightEntrance-120, yBotRightEntrance);
    ctx.lineTo(xMidRoofRightEntrance,yMidRoofRightEntrance);
    ctx.lineTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance);
    

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath(); 


}




function sideWallRightEntrance(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#ffc2a3";

    ctx.moveTo(xRightSm, yTopSm);
    ctx.lineTo(xRightSm2, yTopSm2);
    ctx.lineTo(xRightSm2, yBotSm2);
    ctx.lineTo(xRightSm, yBotSm);
    ctx.lineTo(xRightSm, yTopSm);

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();

}

function sideWallLeftEntrance(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(xLeftSm, yTopSm);
    ctx.lineTo(xLeftSm2, yTopSm2);
    ctx.lineTo(xLeftSm2, yBotSm2);
    ctx.lineTo(xLeftSm, yBotSm);
    ctx.lineTo(xLeftSm, yTopSm);

    //ctx.fill();
   // ctx.stroke();
    ctx.closePath();

}

function mainBuilding(){
    sideWallLeft();
    sideBaseRoofLeft();
    backWall();
    sideBaseRoofRight();
    sideWallRight();
    sideRoofLeft();
    roofThingy();
    frontWall();
    sideRoofRight();
}

function entranceBuilding(){

    
    backWallEntrance();
    sideWallLeftEntrance();
    sideBaseRoofLeftEntrance();
    sideBaseRoofRightEntrance();
    sideWallRightEntrance();
    sideRoofLefttEntrance();
    frontWallEntrance();
    sideRoofRightEntrance();
    
}

function main() {
    //Run main program here.
  
    mainBuilding();
    entranceBuilding();

}