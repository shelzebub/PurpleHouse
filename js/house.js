    //MAIN BUILDING TEMPLATE
    //front house wall
    var xLeft = 150;
    var xRight = 250;
    var yTop = 300;
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
    var yTopSm = 178+285*4/7;
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

    //ctx.fill();
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
    ctx.stroke();
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
    ctx.stroke();
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
    ctx.moveTo(xLeftSm2+2,yTopSm2);
    ctx.lineTo(xLeftSm2+2,yBotSm2);
    ctx.lineTo(xRightSm2,yBotSm2);
    ctx.lineTo(xRightSm2,yTopSm2);
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();


    //triangle part
    ctx.beginPath();
    ctx.moveTo(xLeftSm2+2,yTopSm2);
    ctx.lineTo(xTopOfTriangleSm2+2, yTopOfTriangleSm2);
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
    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10); //bottom left
    ctx.lineTo(xBotLeftEntrance-15, yBotLeftEntrance-10);
    ctx.lineTo(xBotRightEntrance-15, yBotRightEntrance-10);
    ctx.lineTo(xMidRoofRightEntrance,yMidRoofRightEntrance-10);
    ctx.lineTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10);
    

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

    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10); //bottom left
    ctx.lineTo(xBotLeftEntrance-125, yBotLeftEntrance-10);
    ctx.lineTo(xBotRightEntrance-125, yBotRightEntrance-10);
    ctx.lineTo(xMidRoofRightEntrance,yMidRoofRightEntrance-10);
    ctx.lineTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10);
    

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



//--------------------------------------------------------------

//side house
function sideHouseRight(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
   
     //SIDEPART (BACK)
    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.moveTo(290-5+15,245+10+10);//TOP LEFT
    ctx.lineTo(290-5+15,390-8-18-2);//BOT LEFT
    ctx.lineTo(315+4,390-8-18-2);//BOT RIGHT
    ctx.lineTo(315+4,245+10+10);//TOP RIGHT
    ctx.lineTo(290-5+15,245+10+10);//TOP LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //sidepart (FRONT)
    ctx.beginPath();
    ctx.fillStyle = "#ffddcc";
    ctx.moveTo(290-5,245+35);//TOP LEFT
    ctx.lineTo(290-5,390-8-5);//BOT LEFT
    ctx.lineTo(315-12,390-8-5);//BOT RIGHT
    ctx.lineTo(315-12,245+35);//TOP RIGHT
    ctx.lineTo(290-5,245+35);//TOP LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
   
    //roofpart (back)
    ctx.beginPath();
    ctx.fillStyle = "#fdac84";

    ctx.moveTo(320-5,195+10); //TOP RIGHT
    ctx.lineTo(275-28,195+10); //TOP LEFT
    ctx.lineTo(290-8+23,250+35-15); //BOT LEFT
    ctx.lineTo(335-28+17,250+35-15);
    ctx.lineTo(320-5,195+10); //TOP RIGHT
    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    
    //RIGHT SIDE
    ctx.beginPath();
    ctx.fillStyle = "#ffc2a3";
    ctx.moveTo(315-12,245+10+25);//TOP LEFT
    ctx.lineTo(335-16,235+2+27);//TOP RIGHT
    ctx.lineTo(335-16,380-16-3);//BOT RIGHT
    ctx.lineTo(315-12,390-8-5);//BOT LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
   
    
    
     //TRIANGLE PART
    ctx.beginPath();
    ctx.fillStyle = "#ffc2a3";
    ctx.moveTo(315-12,245+10+25);//TOP LEFT
    ctx.lineTo(310,215);//TOP RIGHT
    ctx.lineTo(335-16,235+2+27);//BOT RIGHT
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //roofpart (front)
    ctx.beginPath();
    ctx.fillStyle = "#fdac84";

    ctx.moveTo(320-5,195+10); //TOP RIGHT
    ctx.lineTo(275-28,195+10); //TOP LEFT
    ctx.lineTo(290-8,250+35); //BOT LEFT
    ctx.lineTo(335-28,250+35);
    ctx.lineTo(320-5,195+10); //TOP RIGHT

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    

    
    
   //---------------
    //railings
    //bottom plate

    ctx.beginPath();
    ctx.moveTo(327+5+5,365-6); //TOP RIGHT
    ctx.lineTo(300+5,365-6); //TOP LEFT
    ctx.lineTo(280-6,385+3); //BOT LEFT
    ctx.lineTo(310-6+5,385+3);//botRight
    ctx.lineTo(327+5+5,365-6); //TOP RIGHT
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(327+5+5,365-2-6); //TOP RIGHT
    ctx.lineTo(300+5,365-2-6); //TOP LEFT
    ctx.lineTo(280-6,385-2+3); //BOT LEFT
    ctx.lineTo(310-6+5,385-2+3);//bot right
    ctx.lineTo(327+5+5,365-2-6); //TOP RIGHT
    
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(327+5+5,365-6-25); //TOP RIGHT
    ctx.lineTo(300+5,365-6-25); //TOP LEFT
    ctx.lineTo(280-6,385+3-25); //BOT LEFT
    ctx.lineTo(310-6+5,385+3-25);//botRight
    ctx.lineTo(327+5+5,365-6-25); //TOP RIGHT
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(327+5+5,365-2-6-25); //TOP RIGHT
    ctx.lineTo(300+5,365-2-6-25); //TOP LEFT
    ctx.lineTo(280-6,385-2+3-25); //BOT LEFT
    ctx.lineTo(310-6+5,385-2+3-25);//bot right
    ctx.lineTo(327+5+5,365-2-6-25); //TOP RIGHT


    //bars
    var xbarTop = 310-6+5;
    var ybarTop = 385+3;
    var xbarBot = 310-6+5;
    var ybarBot = 385+3-25;
    
    ctx.beginPath();
    ctx.moveTo(xbarTop,ybarTop); //TOP RIGHT
    ctx.lineTo(xbarBot,ybarBot); //TOP LEFT
    
    ctx.moveTo(xbarTop-8,ybarTop); //TOP RIGHT
    ctx.lineTo(xbarBot-8,ybarBot); //TOP LEFT
    
    ctx.moveTo(xbarTop-16,ybarTop); //TOP RIGHT
    ctx.lineTo(xbarBot-16,ybarBot); //TOP LEFT

    
    ctx.moveTo(xbarTop-25,ybarTop); //TOP RIGHT
    ctx.lineTo(xbarBot-25,ybarBot); //TOP LEFT
    
    ctx.moveTo(xbarTop-33,ybarTop); //TOP RIGHT
    ctx.lineTo(xbarBot-33,ybarBot); //TOP LEFT
    
    

    ctx.moveTo(xbarTop+6,ybarTop-6); //TOP RIGHT
    ctx.lineTo(xbarBot+6,ybarBot-6); //TOP LEFT
  
    ctx.moveTo(xbarTop+12,ybarTop-12); //TOP RIGHT
    ctx.lineTo(xbarBot+12,ybarBot-12); //TOP LEFT
  
    ctx.moveTo(xbarTop+17,ybarTop-17); //TOP RIGHT
    ctx.lineTo(xbarBot+17,ybarBot-17); //TOP LEFT
  
    ctx.moveTo(xbarTop+23,ybarTop-23); //TOP RIGHT
    ctx.lineTo(xbarBot+23,ybarBot-23); //TOP LEFT
    
    ctx.moveTo(xbarTop+28,ybarTop-28); //TOP RIGHT
    ctx.lineTo(xbarBot+28,ybarBot-28); //TOP LEFT
    
    ctx.moveTo(xbarTop+21,ybarTop-28); //TOP RIGHT
    ctx.lineTo(xbarBot+21,ybarBot-28); //TOP LEFT
    
    ctx.moveTo(xbarTop+13,ybarTop-28); //TOP RIGHT
    ctx.lineTo(xbarBot+13,ybarBot-28); //TOP LEFT
    
    ctx.moveTo(xbarTop+5,ybarTop-28); //TOP RIGHT
    ctx.lineTo(xbarBot+5,ybarBot-28); //TOP LEFT
    
    ctx.moveTo(xbarTop-2,ybarTop-28); //TOP RIGHT
    ctx.lineTo(xbarBot-2,ybarBot-28); //TOP LEFT
  
    ctx.stroke();
    ctx.closePath();

}




//------------------------------------------------------------



//chimney
function chimney(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
    
    var xLeft = 235-21;
    var xRight = 245-23;
    
    var yLeft = 180+20-20;
    var yRight = 160-10-20;
    var yRightBot = 170+17-20;
    
    
    //basefront
    ctx.beginPath();
    ctx.moveTo(xLeft+1-1,yLeft+31);//bottom left
    ctx.lineTo(xLeft+1-1,yRight+31);//top left
    ctx.lineTo(xRight,yRight+31);//top right
    ctx.lineTo(xRight,yRightBot+31);//bottom right
    ctx.lineTo(xLeft+1-1,yLeft+31);
    ctx.stroke();
    ctx.closePath();
    
    
    
    var xLeftSide = xRight;
    var xRightSide = xRight +10;
    var yBotSide = yRight-10;
    var yTopSide = yRightBot;
    var yTopSide2 = yRightBot-13   
    
    
   
    //baseright
    ctx.beginPath();
    ctx.moveTo(xLeftSide,yTopSide+31); //bottom left
    ctx.lineTo(xLeftSide,yRight+31);//top left
    ctx.lineTo(xRightSide,yBotSide+31);//top right
    ctx.lineTo(xRightSide,yTopSide2+31); //bottom right

    ctx.stroke();
    ctx.closePath();
    
    ctx.fillStyle = "red";
    //topfront
    ctx.beginPath();
    ctx.lineTo(235-22+1 - 2,160-30-1+31); //bot left
    ctx.lineTo(245-22-4 + 2,160-30-1+31);// bot right
    ctx.lineTo(245-22-4 + 2,155-30-1+31);//top right
    ctx.lineTo(235-22+1 - 2,155-30-1+31);//top left
    ctx.lineTo(235-22+1 - 2,160-30-1+31);
    //ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //topright
    ctx.beginPath();
    ctx.lineTo(245-22-3 + 2,155-30+31);//top LEFT
    ctx.lineTo(255-22-1 + 2,150-5-32+31);//top rihgt
    ctx.lineTo(255-22-1 + 2,155-5-32+31);//bot right
    ctx.lineTo(245-22-3 + 2,160-30+31);//bop left
    ctx.lineTo(245-22-3 + 2,155-30+31);//top LEFT

 //   ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //topabove
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.lineTo(235-24 ,155-30-2+31);//bot left
    ctx.lineTo(235-24 + 10,150-30-5-2+31);//top left
    ctx.lineTo(255-25+1 + 2,150-30-5-2+31);//top right
    ctx.lineTo(245-25+1 + 2,155-30-2+31);//bot right
    ctx.lineTo(235-24 ,155-30-2+31);//bot left
    //ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.lineTo(235-24+4 ,155-30-2+31);//bot left
    ctx.lineTo(235-24 + 10+4-3,150-30-5-2+31+3);//top left
    ctx.lineTo(255-25+1 + 2-3,150-30-5-2+31+3);//top right
    ctx.lineTo(245-25+1 + 2,155-30-2+31);//bot right
    ctx.lineTo(235-24 +4,155-30-2+31);//bot left
    //ctx.fill();
    ctx.stroke();
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
    chimney();
    mainBuilding();
    entranceBuilding();
    
    sideHouseRight();
}