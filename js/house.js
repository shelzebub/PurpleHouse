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

    //---------------------------------------------------------

    //colors
    var colourWall = "#ffddcc";
    var colourWallShade = "#ffc2a3";
    var colourWallShadeDark = "#ce997e";
    var colourStairsShade = "#ffb691";
    var colourRoof = "#fdac84";
    var colourRoofShade = "#f59c70";
    var colourRoofShadeDark = "#d37749";
    var colourPlank = "#4d3122";
    var colourPlankShade = "#412718"
    var colourPlankLight = "#6d4834";
    var brick = "#931313";
    var chimneyBrick = "#f44747";
    var colourChimneyTop = "#666666";
    var colourChimney = "#888888";
    var colourChimneyShade = "#777777";
    var colourInnerShade = "#654a3b";
    var colourWindow = "#d3c0b6";
    var colourBlackish = "#1d1d1d";
    var colourSideHouseWindow = "#f2e8c9";
    var colourSmoke = "#AAAAAA";


    //animation counter variables
    var counter = 0;
    var interval = 150;
    var animation = setInterval(function () {
        animateSmoke()
    }, interval);



    

function frontWall() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //bottom rectangle

    ctx.beginPath();
    ctx.fillStyle = colourWall;
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
    ctx.fillStyle = colourWall;
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
    ctx.fillStyle = colourWall;

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
    ctx.fillStyle = colourRoof;

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
    ctx.fillStyle = colourRoof;

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
    ctx.fillStyle = colourRoofShadeDark;

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
    ctx.fillStyle = colourRoof;

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
    ctx.fillStyle = colourWallShadeDark;

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
    ctx.fillStyle = colourWall;

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
    ctx.fillStyle = colourWall;
    ctx.beginPath();
    ctx.moveTo(xLeftSm-3,yTopSm);
    ctx.lineTo(xLeftSm-3,yBotSm);
    ctx.lineTo(xRightSm-3,yBotSm);
    ctx.lineTo(xRightSm-3,yTopSm);
    ctx.fill();
//    ctx.stroke();
    ctx.closePath();

    //triangle part

    ctx.beginPath();
    ctx.moveTo(xLeftSm+3,yTopSm);
    ctx.lineTo(xTopOfTriangleSm+3, yTopOfTriangleSm);
    ctx.lineTo(xRightSm+3,yTopSm);
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
    ctx.fillStyle = colourWall;
    ctx.beginPath();
    ctx.moveTo(xLeftSm2+2+3,yTopSm2);
    ctx.lineTo(xLeftSm2+2+3,yBotSm2);
    ctx.lineTo(xRightSm2-3,yBotSm2);
    ctx.lineTo(xRightSm2-3,yTopSm2);
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
    ctx.fillStyle = colourWall;

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
    ctx.fillStyle = colourRoof;
    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10); //bottom left
    ctx.lineTo(xBotLeftEntrance-15-3, yBotLeftEntrance-10-7);
    ctx.lineTo(xBotRightEntrance-15-3, yBotRightEntrance-10-7);
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
    ctx.fillStyle = colourRoofShadeDark;

    
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
    ctx.fillStyle = colourRoofShadeDark;

    ctx.moveTo(xMidRoofLeftEntrance, yMidRoofLeftEntrance-10); //bottom left
    ctx.lineTo(xBotLeftEntrance-125+8, yBotLeftEntrance-20);
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
    ctx.fillStyle = colourWallShade;

    ctx.moveTo(xRightSm-3, yTopSm);
    ctx.lineTo(xRightSm2-3, yTopSm2);
    ctx.lineTo(xRightSm2-3, yBotSm2);
    ctx.lineTo(xRightSm-3, yBotSm);
    ctx.lineTo(xRightSm-3, yTopSm);

    ctx.fill();
  //  ctx.stroke();
    ctx.closePath();

}

function sideWallLeftEntrance(){
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(xLeftSm+3, yTopSm);
    ctx.lineTo(xLeftSm2+3, yTopSm2);
    ctx.lineTo(xLeftSm2+3, yBotSm2);
    ctx.lineTo(xLeftSm+3, yBotSm);
    ctx.lineTo(xLeftSm+3, yTopSm);

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
     

    //railing floor
    ctx.fillStyle = colourWall;
    ctx.moveTo(290-5+15,245+10+10);//TOP LEFT
    ctx.lineTo(290-5+15,390-8-18-2);//BOT LEFT
    ctx.lineTo(315+4,390-8-18-2);//BOT RIGHT
    ctx.lineTo(315+4,245+10+10);//TOP RIGHT
    ctx.lineTo(290-5+15,245+10+10);//TOP LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle= "white";
    ctx.moveTo(280-6,385+3); //BOT LEFT
    ctx.lineTo(310-6+5,385+3);//botRight
    ctx.lineTo(327+5+5,365-6); //TOP RIGHT
    ctx.lineTo(327+5+5,365-6); //TOP RIGHT
    ctx.lineTo(300+5,365-6); //TOP LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    //sidepart (FRONT)
    ctx.beginPath();
    ctx.fillStyle = colourWall;
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
    ctx.fillStyle = colourRoofShadeDark;

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
    ctx.fillStyle = colourWallShade;
    ctx.moveTo(315-12,245+10+25);//TOP LEFT
    ctx.lineTo(335-16,235+2+27);//TOP RIGHT
    ctx.lineTo(335-16,380-16-3);//BOT RIGHT
    ctx.lineTo(315-12,390-8-5);//BOT LEFT
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
   
    
    
     //TRIANGLE PART
    ctx.beginPath();
    ctx.fillStyle = colourWallShade;
    ctx.moveTo(315-12,245+10+25);//TOP LEFT
    ctx.lineTo(310,215);//TOP RIGHT
    ctx.lineTo(335-16,235+2+27);//BOT RIGHT
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    //roofpart (front)
    ctx.beginPath();
    ctx.fillStyle = colourRoofShade;

    ctx.moveTo(320-5,195+10); //TOP RIGHT
    ctx.lineTo(275-28,195+10); //TOP LEFT
    ctx.lineTo(290-8,250+35); //BOT LEFT
    ctx.lineTo(335-28,250+35);
    ctx.lineTo(320-5,195+10); //TOP RIGHT

    ctx.fill();
//    ctx.stroke();
    ctx.closePath();
    
    

    
    
   //---------------
    //railings
    //bottom plate

  
    
    ctx.beginPath();
    
    ctx.moveTo(280-6,385+3); //BOT LEFT
    ctx.lineTo(310-6+5,385+3);//botRight
    ctx.lineTo(327+5+5,365-6); //TOP RIGHT
    ctx.lineTo(327+5+5,365-6); //TOP RIGHT
    ctx.lineTo(300+20,365-6); //TOP LEFT
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(280-6,385+3+2); //BOT LEFT
    ctx.lineTo(310-6+5,385+3+2);//botRight
    ctx.lineTo(327+5+5,365-6+2); //TOP RIGHT
    ctx.lineTo(327+5+5,365-6+2); //TOP RIGHT
    ctx.lineTo(300+20,365-6+2); //TOP LEFT
    
    ctx.stroke();
    ctx.closePath();
    
    //rip rail connector
    ctx.beginPath();
    ctx.moveTo(280-6,385+3-23); //BOT LEFT
    ctx.lineTo(310-6+5,385+3-23);//botRight
    ctx.lineTo(327+5+5,365-6-23); //TOP RIGHT
    ctx.lineTo(327+5+5,365-6-23); //TOP RIGHT
    ctx.lineTo(300+20,365-6-23); //TOP LEFT
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(280-6,385+3-25); //BOT LEFT
    ctx.lineTo(310-6+5,385+3-25);//botRight
    ctx.lineTo(327+5+5,365-6-25); //TOP RIGHT
    ctx.lineTo(327+5+5,365-6-25); //TOP RIGHT
    ctx.lineTo(300+20,365-6-25); //TOP LEFT
    ctx.stroke();
    ctx.closePath();

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
   
    ctx.stroke();
    ctx.closePath();

}

function sideHousePlanks(){
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //wood planks for triangle part
    
    ctx.beginPath();
    ctx.fillStyle = colourPlank
    
    ctx.moveTo(313,232); //TOP RIGHT
    ctx.lineTo(313,271); //TOP LEFT
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fill();
    //ctx.closePath();
    
   // ctx.beginPath();
    ctx.fillStyle = colourPlank
    
    ctx.moveTo(309+1,275-1); //TOP RIGHT
    ctx.lineTo(320-1,265); //TOP LEFT
    ctx.stroke();
    ctx.stroke();
    ctx.fill();
   // ctx.closePath();
    
    ctx.moveTo(309+1,275-1-1); //TOP RIGHT
    ctx.lineTo(320-1,265-1); //TOP LEFT
    ctx.stroke();
    ctx.stroke();
    ctx.fill();
   // ctx.closePath();
    
     ctx.moveTo(309+1,275-1-2); //TOP RIGHT
    ctx.lineTo(320-1,265-2); //TOP LEFT
    ctx.stroke();
    ctx.stroke();
    ctx.fill();
    //ctx.closePath();
    
     ctx.moveTo(309+1-1,275-1+1); //TOP RIGHT
    ctx.lineTo(320-1-1,265+1); //TOP LEFT
    ctx.stroke();
    ctx.stroke();
    ctx.fill();
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
    ctx.fillStyle = colourChimney;
    ctx.beginPath();
    ctx.moveTo(xLeft+1-1,yLeft+31);//bottom left
    ctx.lineTo(xLeft+1-1,yRight+31);//top left
    ctx.lineTo(xRight,yRight+31);//top right
    ctx.lineTo(xRight,yRightBot+31);//bottom right
    ctx.lineTo(xLeft+1-1,yLeft+31);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    
    var xLeftSide = xRight;
    var xRightSide = xRight +10;
    var yBotSide = yRight-10;
    var yTopSide = yRightBot;
    var yTopSide2 = yRightBot-13   
    
    
   
    //baseright
    ctx.fillStyle = colourChimneyShade;
    ctx.beginPath();
    ctx.moveTo(xLeftSide,yTopSide+31); //bottom left
    ctx.lineTo(xLeftSide,yRight+31);//top left
    ctx.lineTo(xRightSide,yBotSide+31);//top right
    ctx.lineTo(xRightSide,yTopSide2+31); //bottom right
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.fillStyle = colourChimneyTop;
    //topfront
    ctx.beginPath();
    ctx.lineTo(235-22+1 - 2,160-30-1+31); //bot left
    ctx.lineTo(245-22-4 + 2,160-30-1+31);// bot right
    ctx.lineTo(245-22-4 + 2,155-30-1+31);//top right
    ctx.lineTo(235-22+1 - 2,155-30-1+31);//top left
    ctx.lineTo(235-22+1 - 2,160-30-1+31);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //topright
    ctx.beginPath();
    ctx.lineTo(245-22-3 + 2,155-30+31);//top LEFT
    ctx.lineTo(255-22-1 + 2,150-5-32+31);//top rihgt
    ctx.lineTo(255-22-1 + 2,155-5-32+31);//bot right
    ctx.lineTo(245-22-3 + 2,160-30+31);//bop left
    ctx.lineTo(245-22-3 + 2,155-30+31);//top LEFT
    ctx.fillStyle = colourChimneyTop;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //topabove
    ctx.fillStyle = colourChimneyShade;
    ctx.beginPath();
    ctx.lineTo(235-24 ,155-30-2+31);//bot left
    ctx.lineTo(235-24 + 10,150-30-5-2+31);//top left
    ctx.lineTo(255-25+1 + 2,150-30-5-2+31);//top right
    ctx.lineTo(245-25+1 + 2,155-30-2+31);//bot right
    ctx.lineTo(235-24 ,155-30-2+31);//bot left
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.lineTo(235-24+4 ,155-30-2+31);//bot left
    ctx.lineTo(235-24 + 10+4-3,150-30-5-2+31+3);//top left
    ctx.lineTo(255-25+1 + 2-3,150-30-5-2+31+3);//top right
    ctx.lineTo(245-25+1 + 2,155-30-2+31);//bot right
    ctx.lineTo(235-24 +4,155-30-2+31);//bot left
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


//----------------------------------------------------------------------

//front staircase
function stairsTop() {
    var xLeft = 160-6-1+2; 
    var xRight =198-6-1; 
    var yTop =407+2+7;
    var yBot =417+2+7;
    
    var xLeftStep = 160+4-6-1+2; 
    var xRightStep =201+1-6-1; 
    var yTopStep =402+3+1.5+7-1+1;
    var yBotStep =405+3+1.5+7-1;
    
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
    
    
    
    //top stair top
    ctx.beginPath;
    ctx.fillStyle = colourStairsShade;
    ctx.moveTo(xLeftStep,yTopStep);//lefttop
    ctx.lineTo(xLeft,yTop);//
    ctx.lineTo(xRight-2,yTop);
    ctx.lineTo(xRightStep-2,yTopStep);
    ctx.lineTo(xLeftStep,yTopStep);

    // ctx.stroke();
    ctx.closePath();
    
    
 
   
    
    //stair 2 top
    
    ctx.moveTo(xLeftStep-4+1,yTopStep+12.5);//lefttop
    ctx.lineTo(xLeft-4,yTop+12.5);//
    ctx.lineTo(xRight-4+1-2,yTop+12.5);
    ctx.lineTo(xRightStep-4-2,yTopStep+12.5);
    ctx.lineTo(xLeftStep-4+1,yTopStep+12.5);
    // ctx.stroke();
    

    
    //bot stair top
    ctx.beginPath;
    ctx.moveTo(xLeftStep-4-4,yTopStep+12.5+12.5);//lefttop
    ctx.lineTo(xLeft-4-4+1,yTop+12.5+12.5);//
    ctx.lineTo(xRight-4-4+1-2,yTop+12.5+12.5);
    ctx.lineTo(xRightStep-4-4-2,yTopStep+12.5+12.5);
    ctx.lineTo(xLeftStep-4-4,yTopStep+12.5+12.5);
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();
    
 
    
}

function stairsFront() {
    var xLeft = 160-6-1+2; 
    var xRight =198-6-1; 
    var yTop =407+2+7;
    var yBot =417+2+7;
    
    var xLeftStep = 160+4-6-1+2; 
    var xRightStep =201+1-6-1; 
    var yTopStep =402+3+1.5+7-1+1;
    var yBotStep =405+3+1.5+7-1;
    
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
    
    
    
    //top stair front
    ctx.beginPath();
    ctx.fillStyle = colourWall;
    ctx.moveTo(xLeft,yTop);
    ctx.lineTo(xLeft,yBot);
    ctx.lineTo(xRight-2.5,yBot);
    ctx.lineTo(xRight-2.5,yTop);
    ctx.lineTo(xLeft,yTop);

   // ctx.stroke();
    
    //stair 2 front
    ctx.moveTo(xLeft-4,yTop+10+3);
    ctx.lineTo(xLeft-4,yBot+10+3);
    ctx.lineTo(xRight-5-1,yBot+10+3);
    ctx.lineTo(xRight-5-1,yTop+10+3);
    ctx.lineTo(xLeft-4,yTop+10+3);

    //ctx.stroke();
   // ctx.closePath();
    
    
    
    //bot stair front
    //ctx.beginPath();
    
    ctx.moveTo(xLeft-10+2,yTop+20+5);
    ctx.lineTo(xLeft-10+2,yBot+20+5);
    ctx.lineTo(xRight-9,yBot+20+5);
    ctx.lineTo(xRight-9,yTop+20+5);
    ctx.lineTo(xLeft-10+2,yTop+20+5);
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();
    
}


function sideOfStairs(){
    //side of stairs
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = colourWallShadeDark;
    ctx.moveTo(193,413.5);
    ctx.lineTo(189-2,415);
    ctx.lineTo(189-2,426);  
    ctx.lineTo(185,427);
    ctx.lineTo(185,438);
    ctx.lineTo(181,441);
    ctx.lineTo(181,452);
    ctx.lineTo(193,438.5);
    ctx.lineTo(193,413.5);
   // ctx.stroke();
    ctx.fill();
    ctx.closePath();
}


//-------------------------------------------------
//FRONT DOOR AREA


//PILLAR AND RAIN BLOCKER
function pillar(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
        
    //pillars
    
    var xLeft = 160;
    var xRight = 163;
    var yTop = 380-10;
    var yBot = 414;
    
    ctx.beginPath();
    ctx.fillStyle = colourPlank;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot);//top right
    ctx.lineTo(xRight,yBot);  //bot right
    ctx.lineTo(xRight,yTop); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourPlank;
    ctx.moveTo(xLeft+30,yTop);//top left
    ctx.lineTo(xLeft+30,yBot);//top right
    ctx.lineTo(xRight+30,yBot);  //bot right
    ctx.lineTo(xRight+30,yTop); //bot left
    ctx.lineTo(xLeft+30,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    //top thingy
    var xLeftT = 160-5;
    var xRightT = 190+3;
    var yTopT = 368;
    var yBotT = 372;
    //front
    ctx.beginPath();
    ctx.fillStyle = colourPlankLight;
    ctx.moveTo(xLeftT,yTopT);//top left
    ctx.lineTo(xLeftT,yBotT+1);//top right
    ctx.lineTo(xRightT,yBotT+1);  //bot right
    ctx.lineTo(xRightT,yTopT); //bot left
    ctx.lineTo(xLeftT,yTopT); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //top
    ctx.beginPath();
    ctx.fillStyle = colourPlankShade;
    ctx.moveTo(xLeftT+3.5,yTopT-4);//top left
    ctx.lineTo(xLeftT,yBotT-5);//top right
    ctx.lineTo(xRightT+1,yBotT-5);  //bot right
    ctx.lineTo(xRightT+3.5,yTopT-4); //bot left
    ctx.lineTo(xLeftT+3.5,yTopT-4); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //side
    ctx.beginPath();
    ctx.fillStyle = colourPlankLight;
    ctx.moveTo(xLeftT+39,yTopT-2+1);//top left
    ctx.lineTo(xLeftT+39,yBotT+1);//top right
    ctx.lineTo(xRightT+4,yBotT-4+1);  //bot right
    ctx.lineTo(xRightT+4,yTopT-5+1); //bot left
    ctx.lineTo(xLeftT+39,yTopT-1+1); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    

}


//DOOR

function door(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168;
    var xRight = 185;
    var yTop = 380;
    var yBot = 414;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-1.5);//top right
    ctx.lineTo(xRight,yBot-1.5);  //bot right
    ctx.lineTo(xRight,yTop); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft+3,yTop);//top left
    ctx.lineTo(xLeft+3,yBot-2.5);//top right
    ctx.lineTo(xRight,yBot-2.5);  //bot right
    ctx.lineTo(xRight,yTop); //bot left
    ctx.lineTo(xLeft+3,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}
//top hole thing
function frontHole(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168;
    var xRight = 185;
    var yTop = 380-35;
    var yBot = 414-35-16.5;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+7.75,yTop+4, 7.5, 0, 2*Math.PI); /////////////
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+10,yTop+4,7, 0, 2*Math.PI);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop+3);//top left
    ctx.lineTo(xLeft,yBot+.5);//top right
    ctx.lineTo(xRight,yBot+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft,yTop+3); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft+3,yTop+3);//top left
    ctx.lineTo(xLeft+3,yBot-2+.5);//top right
    ctx.lineTo(xRight,yBot-2+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft+3,yTop+3); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
  
}

//---------------------------------------------------------------

//window
function frontWindow(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168+21;
    var xRight = 185+21;
    var yTop = 380-35-95;
    var yBot = 414-35-16.5-95+8;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+7.75,yTop+4, 7.5, 0, 2*Math.PI); /////////////
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourWindow;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+10,yTop+4,7, 0, 2*Math.PI);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop+3);//top left
    ctx.lineTo(xLeft,yBot+.5);//top right
    ctx.lineTo(xRight,yBot+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft,yTop+3); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourWindow;
    ctx.moveTo(xLeft+3,yTop+3);//top left
    ctx.lineTo(xLeft+3,yBot-2+.5);//top right
    ctx.lineTo(xRight,yBot-2+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft+3,yTop+3); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //cross
    
    var xLeft = 198.25;
    var xRight = 198.75;
    var yTop = 380-10-123+.5;
    var yBot = 414-140.25;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot);//top right
    ctx.lineTo(xRight,yBot);  //bot right
    ctx.lineTo(xRight,yTop); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    var xLeft2 = 192.5;
    var xRight2 = 205;
    var yTop2 = 260.25;
    var yBot2 = 260.75;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft2,yTop2);//top left
    ctx.lineTo(xLeft2,yBot2);//top right
    ctx.lineTo(xRight2,yBot2);  //bot right
    ctx.lineTo(xRight2,yTop2); //bot left
    ctx.lineTo(xLeft2,yTop2); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
}
    
    
//-----------------------------------------------------


//side window (entrance building)

function sideWindowEntrance() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168+56;
    var xRight = 185+56;
    var yTop = 380-5+3;
    var yBot = 400+3;
    
   
    
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-1.5+1);//top right
    ctx.lineTo(xRight-3,yBot-3-11.5+1);  //bot right
    ctx.lineTo(xRight-3,yTop-11.5); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-2.5);//top right
    ctx.lineTo(xRight-4.5,yBot-3-11.5);  //bot right
    ctx.lineTo(xRight-4.5,yTop-11.5); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    
    
    //bottom thingy under the window
    
  
    
    var xLeftT = 223+.5+.5;
    var xRightT = 228+.5;
    var yTopT = 368+35;
    var yBotT = 372+36;
    
    //front
    ctx.beginPath();
    ctx.fillStyle = colourPlankLight;
    ctx.moveTo(xLeftT,yTopT);//top left
    ctx.lineTo(xLeftT,yBotT);//top right
    ctx.lineTo(xRightT,yBotT);  //bot right
    ctx.lineTo(xRightT,yTopT); //bot left
    ctx.lineTo(xLeftT,yTopT); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //top
    ctx.beginPath();
    ctx.fillStyle = colourPlankShade;
    ctx.moveTo(xLeftT+15,yTopT-14);//top left
    ctx.lineTo(xLeftT+19.5,yBotT-19);//top right
    ctx.lineTo(xRightT+1,yBotT-5);  //bot right
    ctx.lineTo(xRightT-4,yTopT-1); //bot left
    ctx.lineTo(xLeftT+3.5,yTopT-4); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //side
    ctx.beginPath();
    ctx.fillStyle = colourPlank;
    ctx.moveTo(xLeftT+19,yTopT-13);//top right
    ctx.lineTo(xLeftT+19,yBotT-13);//bto right
    ctx.lineTo(xRightT,yBotT);  //bot left
    ctx.lineTo(xRightT,yTopT); //top left
    ctx.lineTo(xLeftT+19,yTopT-13); //top right
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    
    
    
}



// main building sides

//window 1

function sideWindowOne() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168+56+30+2;
    var xRight = 185+56+30+10;
    var yTop = 380-5+3-45-10;
    var yBot = 400+3-45+5;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-1.5+1);//top right
    ctx.lineTo(xRight-3,yBot-3-11.5+1-5);  //bot right
    ctx.lineTo(xRight-3,yTop-11.5-5); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#f2e8c9";
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-2.5);//top right
    ctx.lineTo(xRight-4.5,yBot-3-11.5-5);  //bot right
    ctx.lineTo(xRight-4.5,yTop-11.5-5); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    
       //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+3,yTop-2);//top left
    ctx.lineTo(xLeft+3,yBot-2.5-2);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+5,yTop-4);//top left
    ctx.lineTo(xLeft+5,yBot-2.5-4);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+8,yTop-6);//top left
    ctx.lineTo(xLeft+8,yBot-2.5-6);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+11,yTop-9);//top left
    ctx.lineTo(xLeft+11,yBot-2.5-9);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+13,yTop-11);//top left
    ctx.lineTo(xLeft+13,yBot-2.5-11);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+16,yTop-14);//top left
    ctx.lineTo(xLeft+16,yBot-2.5-14);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+19,yTop-16);//top left
    ctx.lineTo(xLeft+19,yBot-2.5-16);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+17,yTop-13);//top left
    ctx.lineTo(xLeft+17,yBot-2.5-13);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+17,yTop-13);//top left
    ctx.lineTo(xLeft+17,yBot-2.5-13);//top right
    
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+31-30-1, yTop-8-8+15+8);//top left
    ctx.lineTo(xRight+38-41-1, yTop-25-10+15+3+8);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+31-30-1, yTop-8-8+15+8+8);//top left
    ctx.lineTo(xRight+38-41-1, yTop-25-10+15+3+8+8);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+31-30-1, yTop-8-8+15+8+8+8);//top left
    ctx.lineTo(xRight+38-41-1, yTop-25-10+15+3+8+8+8);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xLeft+31-30-1, yTop-8-8+15+8+8+8+8);//top left
    ctx.lineTo(xRight+38-41-1, yTop-25-10+15+3+8+8+8+8);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    

}

//window 2
function sideWindowTwo() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168+56+82+1;
    var xRight = 185+56+82-3;
    var yTop = 380-5+3-82;
    var yBot = 400+3-82+35;
    
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-1.5+1);//top right
    ctx.lineTo(xRight-3,yBot-3-11.5+1+2);  //bot right
    ctx.lineTo(xRight-3,yTop-11.5+2); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#f2e8c9";
    ctx.moveTo(xLeft,yTop);//top left
    ctx.lineTo(xLeft,yBot-2.5);//top right
    ctx.lineTo(xRight-4.5,yBot-3-11.5+2);  //bot right
    ctx.lineTo(xRight-4.5,yTop-11.5+2); //bot left
    ctx.lineTo(xLeft,yTop); //top left
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //THE BARS
    
    var xbarLeft = xLeft;
    var xbarRight = xRight;
    var ybarTop = yTop;
    var ybarBot = yBot-2.5;
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5, ybarTop-2-3.5);//top left
    ctx.lineTo(xbarLeft+5,ybarBot-2-3.5);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5-4-1, ybarTop-5+4+10);//top left
    ctx.lineTo(xbarRight+3-6-1,ybarTop-14-2+6+10);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
      //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5-4-1, ybarTop-5+4+20);//top left
    ctx.lineTo(xbarRight+3-6-1,ybarTop-14-2+6+20);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
      //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5-4-1, ybarTop-5+4+30);//top left
    ctx.lineTo(xbarRight+3-6-1,ybarTop-14-2+6+30);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
      //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5-4-1, ybarTop-5+4+40);//top left
    ctx.lineTo(xbarRight+3-6-1,ybarTop-14-2+6+40);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
      //bars
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xbarLeft+5-4-1, ybarTop-5+4+50);//top left
    ctx.lineTo(xbarRight+3-6-1,ybarTop-14-2+6+50);//top right

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
 
    
}

//front facing window thing

function sideBuildingHole(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft = 168+117+3-.5+2;
    var xRight = 185+117-2-1;
    var yTop = 380-35-53;
    var yBot = 414-35-16.5-45;
    
    
    
  

    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop+3);//top left
    ctx.lineTo(xLeft,yBot+.5);//top right
    ctx.lineTo(xRight,yBot+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft,yTop+3); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    
    //brown hole
    ctx.beginPath();
    ctx.fillStyle = colourInnerShade;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+7.75-2-1,yTop+4-1, 4.5, 0, 2*Math.PI); /////////////
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
      //black hole
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft,yTop);//top left
    ctx.arc(xLeft+10-2.75-2,yTop+4,4.25, 0, 2*Math.PI);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourBlackish;
    ctx.moveTo(xLeft+1.5,yTop+3);//top left
    ctx.lineTo(xLeft+1.5,yBot-2+.5+.5);//top right
    ctx.lineTo(xRight,yBot-2+.5+.5);  //bot right
    ctx.lineTo(xRight,yTop+3); //bot left
    ctx.lineTo(xLeft+1.5,yTop+3+.5); //top left
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
 
    
  
}





function chimneyBricks() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft =182; 
    var xRight =193;
    var yTop =323;
    var yBot =327;
    
    
    //chimney side top
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1,yTop-5-115-3-32-1-3);
    ctx.lineTo(xLeft+12-1+3+28+1,yBot-5-118-32-3);
    ctx.lineTo(xRight+12+28-2,yBot-12-3-115-32-3);
    ctx.lineTo(xRight+12-2+28,yTop-12-2-115-32-1-3);
    ctx.lineTo(xLeft+12+3+28+1,yTop-5-115-3-32-1-3);

    ctx.stroke();
    ctx.closePath();
    
    
    //chimney side bottom set left
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1,yTop-5-115-3-32-1-3);
    ctx.lineTo(xLeft+12-1+3+28+1,yBot-5-118-32-3);
    ctx.lineTo(xRight+12+28-2,yBot-12-3-115-32-3);
    ctx.lineTo(xRight+12-2+28,yTop-12-2-115-32-1-3);
    ctx.lineTo(xLeft+12+3+28+1,yTop-5-115-3-32-1-3);

    ctx.stroke();
    ctx.closePath();
    
    //chimney side bottom set right
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1+2,yTop-5-115-3-32+1-2-1);
    ctx.lineTo(xLeft+12-1+3+28+1+2,yBot-5-118-32+1-2-1);
    ctx.lineTo(xRight+12+28-2,yBot-12-3-115-32+1-1);
    ctx.lineTo(xRight+12-2+28,yTop-12-2-115-32+1-1);
    ctx.lineTo(xLeft+12+3+28+1+2,yTop-5-115-3-32+1-2-1);

    ctx.stroke();
    ctx.closePath();
    
    
    //chimney side bottom set left
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1+2-5,yTop-5-115-3-32+1-2+5);
    ctx.lineTo(xLeft+12-1+3+28+1+2-5,yBot-5-118-32+1-2+5);
    ctx.lineTo(xRight+12+28-2-5,yBot-12-3-115-32+1+5);
    ctx.lineTo(xRight+12-2+28-5,yTop-12-2-115-32+1+5);
    ctx.lineTo(xLeft+12+3+28+1+2-5,yTop-5-115-3-32+1-2+5);

    ctx.stroke();
    ctx.closePath();
    
    
    
    //chimney front top
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1-10,yTop-5-115-3-32-1-3+1);
    ctx.lineTo(xLeft+12-1+3+28+1-10,yBot-5-118-32-3);
    ctx.lineTo(xRight+12+28-2-10,yBot-12-3-115-32+4);
    ctx.lineTo(xRight+12-2+28-10,yTop-12-2-115-32-1+4);
    ctx.lineTo(xLeft+12+3+28+1-10,yTop-5-115-3-32-1-3+1);

    ctx.stroke();
    ctx.closePath();
    
    //chimney front bottom
    ctx.beginPath();
    ctx.fillStyle="chimneyBrick";
    ctx.moveTo(xLeft+12-1+3+28+1-10,yTop-5-115-3-32-1-3+1+8+3);
    ctx.lineTo(xLeft+12-1+3+28+1-10,yBot-5-118-32-3+8-2-1+3);
    ctx.lineTo(xRight+12+28-2-12,yBot-12-3-115-32+4+8-2-1+3);
    ctx.lineTo(xRight+12-2+28-12,yTop-12-2-115-32-1+4+8+3);
    ctx.lineTo(xLeft+12+3+28+1-10,yTop-5-115-3-32-1-3+1+8+3);

    ctx.stroke();
    ctx.closePath();

    
}



function roofBricks() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var xLeft =182; 
    var xRight =193;
    var yTop =323;
    var yBot =327;
    
//bigger bricks 
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1,yTop-5);
    ctx.lineTo(xLeft+12+2,yBot-5);
    ctx.lineTo(xRight+12+1,yBot-12-5);
    ctx.lineTo(xRight+12-1,yTop-12-4);
    ctx.lineTo(xLeft+12,yTop-5);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+1,yTop-5-8);
    ctx.lineTo(xLeft+12+2+1,yBot-5-8);
    ctx.lineTo(xRight+12+1+1,yBot-12-5-8);
    ctx.lineTo(xRight+12-1+1,yTop-12-4-8);
    ctx.lineTo(xLeft+12+1,yTop-5-8);

    ctx.stroke();
    ctx.closePath();
    
    //entrance house middle set bottom brick
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+1+11+4+2+2,yTop-5-8+28);
    ctx.lineTo(xLeft+12+2+1+11+4+2+2,yBot-5-8+28);
    ctx.lineTo(xRight+12+1+1+11+4+2+2,yBot-12-5-8+28);
    ctx.lineTo(xRight+12-1+1+11+4+2+2,yTop-12-4-8+28);
    ctx.lineTo(xLeft+12+1+11+4+2+2,yTop-5-8+28);

    ctx.stroke();
    ctx.closePath();
    
    
    //entrance house bottom set bottom brick
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+26,yTop-5+46);
    ctx.lineTo(xLeft+12+2+26,yBot-5+46);
    ctx.lineTo(xRight+12+1+26,yBot-12-5+46);
    ctx.lineTo(xRight+12-1+26,yTop-12-4+46);
    ctx.lineTo(xLeft+12+26,yTop-5+46);

    ctx.stroke();
    ctx.closePath();
    
    //main house middle top brick
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+30+8,yTop-5-75+12);
    ctx.lineTo(xLeft+12+2+30+8,yBot-5-75+12);
    ctx.lineTo(xRight+12+1+30+8,yBot-12-5-75+12);
    ctx.lineTo(xRight+12-1+30+8,yTop-12-4-75+12);
    ctx.lineTo(xLeft+12+30+8,yTop-5-75+12);

    ctx.stroke();
    ctx.closePath();
    
    //main house middle bottom brick
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+40+8,yTop-5-80+12);
    ctx.lineTo(xLeft+12+2+40+8,yBot-5-80+12);
    ctx.lineTo(xRight+12+1+40+8,yBot-12-5-80+12);
    ctx.lineTo(xRight+12-1+40+8,yTop-12-4-80+12);
    ctx.lineTo(xLeft+12+40+8,yTop-5-80+12);

    ctx.stroke();
    ctx.closePath();
    
    
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+48,yTop-5-115);
    ctx.lineTo(xLeft+12+2+48,yBot-5-115);
    ctx.lineTo(xRight+12+1+48,yBot-12-5-115);
    ctx.lineTo(xRight+12-1+48,yTop-12-4-115);
    ctx.lineTo(xLeft+12+48,yTop-5-115);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+40,yTop-5-113);
    ctx.lineTo(xLeft+12+2+40,yBot-5-113);
    ctx.lineTo(xRight+12+1+40,yBot-12-5-113);
    ctx.lineTo(xRight+12-1+40,yTop-12-4-113);
    ctx.lineTo(xLeft+12+40,yTop-5-113);

    ctx.stroke();
    ctx.closePath();
   

 
    
    
    
    
//smaller brick
      
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+5+15+3-2,yTop-5+2+8+2);
    ctx.lineTo(xLeft+12+2+5+15+3-2,yBot-5+2+8+2);
    ctx.lineTo(xRight+12+5+15+3-2,yBot-12-3+2+8+2);
    ctx.lineTo(xRight+12-2+5+15+3-2,yTop-12-2+2+8+2);
    ctx.lineTo(xLeft+12+5+15+3-2,yTop-5+2+8+2);

    ctx.stroke();
    ctx.closePath();
    
       
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+5+8-2,yTop-5+20+2);
    ctx.lineTo(xLeft+12+2+5+8-2,yBot-5+20+2);
    ctx.lineTo(xRight+12+5+8-2,yBot-12-3+20+2);
    ctx.lineTo(xRight+12-2+5+8-2,yTop-12-2+20+2);
    ctx.lineTo(xLeft+12+5+8-2,yTop-5+20+2);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+27,yTop-5+38);
    ctx.lineTo(xLeft+12+2+27,yBot-5+38);
    ctx.lineTo(xRight+12+27,yBot-12-3+38);
    ctx.lineTo(xRight+12-2+27,yTop-12-2+38);
    ctx.lineTo(xLeft+12+27,yTop-5+38);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+50+6,yTop-5-18);
    ctx.lineTo(xLeft+12+2+50+6,yBot-5-18);
    ctx.lineTo(xRight+12+50+6,yBot-12-3-18);
    ctx.lineTo(xRight+12-2+50+6,yTop-12-2-18);
    ctx.lineTo(xLeft+12+50+6,yTop-5-18);

    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+38,yTop-5-104);
    ctx.lineTo(xLeft+12+2+38,yBot-5-104);
    ctx.lineTo(xRight+12+38,yBot-12-3-104);
    ctx.lineTo(xRight+12-2+38,yTop-12-2-104);
    ctx.lineTo(xLeft+12+38,yTop-5-104);

    ctx.stroke();
    ctx.closePath();
    
    
    //even smaller brick LOL
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+12-1+38+30+3,yTop-5-115-3);
    ctx.lineTo(xLeft+12+2+38+30+3,yBot-5-118);
    ctx.lineTo(xRight+12+38+30,yBot-12-3-115);
    ctx.lineTo(xRight+12-2+38+30,yTop-12-2-115);
    ctx.lineTo(xLeft+12+38+30+3,yTop-5-115-3);

    ctx.stroke();
    ctx.closePath();
    
    
    
    
    
    
    //sidehouse bottom brick
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+100-5-2,yTop-55);
    ctx.lineTo(xLeft+100-5,yBot-55);
    ctx.lineTo(xRight+100-5,yBot-55);
    ctx.lineTo(xRight+100-5,yTop-55);
    ctx.lineTo(xLeft+100-5-2,yTop-55);

    ctx.stroke();
    ctx.closePath();
    
    //sidehouse middle set bottom
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+100+5,yTop-55-18);
    ctx.lineTo(xLeft+100+5,yBot-55-18);
    ctx.lineTo(xRight+100+5+3,yBot-55-18);
    ctx.lineTo(xRight+100+5+3,yTop-55-18);
    ctx.lineTo(xLeft+100+5,yTop-55-18);

    ctx.stroke();
    ctx.closePath();
    
    //sidehouse middle set top
    ctx.beginPath();
    ctx.fillStyle="brick";
    ctx.moveTo(xLeft+100+5+6,yTop-55-18-4.5);
    ctx.lineTo(xLeft+100+5+6,yBot-55-18-4.5);
    ctx.lineTo(xRight+100+5+3+6,yBot-55-18-4.5);
    ctx.lineTo(xRight+100+5+3+6,yTop-55-18-4.5);
    ctx.lineTo(xLeft+100+5+6,yTop-55-18-4.5);

    ctx.stroke();
    ctx.closePath();
    
    
    
    //sidehouse top set bottom left
    ctx.beginPath();
    ctx.fillStyle="brown";
    ctx.moveTo(xLeft+100+5+6-3-29,yTop-55-18-33);
    ctx.lineTo(xLeft+100+5+6-3-29,yBot-55-18-33);
    ctx.lineTo(xRight+100+5+3+6-29,yBot-55-18-33);
    ctx.lineTo(xRight+100+5+3+6-29,yTop-55-18-33);
    ctx.lineTo(xLeft+100+5+6-3-29,yTop-55-18-33);
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    
    //sidehouse top set bottom right
    ctx.beginPath();
    ctx.fillStyle="brown";
    ctx.moveTo(xLeft+100+5+6-3-12,yTop-55-18-33);
    ctx.lineTo(xLeft+100+5+6-3-12,yBot-55-18-33);
    ctx.lineTo(xRight+100+5+3+6-12,yBot-55-18-33);
    ctx.lineTo(xRight+100+5+3+6-12,yTop-55-18-33);
    ctx.lineTo(xLeft+100+5+6-3-12,yTop-55-18-33);
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    
    //sidehouse top set top
    ctx.beginPath();
    ctx.fillStyle="brown";
    ctx.moveTo(xLeft+100+5+6-3-22,yTop-55-18-33-4);
    ctx.lineTo(xLeft+100+5+6-3-22,yBot-55-18-33-4);
    ctx.lineTo(xRight+100+5+3+6-22,yBot-55-18-33-4);
    ctx.lineTo(xRight+100+5+3+6-22,yTop-55-18-33-4);
    ctx.lineTo(xLeft+100+5+6-3-22,yTop-55-18-33-4);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    
    
    
}


function smoke1(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(235,120,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,130,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
}

function smoke2(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,110,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,125,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,125,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function smoke3(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,90,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,95,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud2
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,115,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,120,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,115,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function smoke4(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(270,70,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,75,6,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,115,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(255,100,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,115,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke5(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(280,55,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,50,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,65,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(270,105,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,90,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(255,110,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke6(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,50,18,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(300,39,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,55,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(305,55,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(280,105,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,90,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,90,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,105,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,90,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke7(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(310,40,20,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(300,20,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,45,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(320,25,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,45,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(285,95,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,85,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(280,80,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(270,100,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,85,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud3
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(235,120,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,130,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke8(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(325,25,20,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(315,10,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(305,30,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(345,20,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,5,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,40,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(285,95,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,85,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,65,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,75,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,85,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud3
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,110,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,125,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,125,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke9(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1 going off screen
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(345,15,18,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(320,0,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(325,15,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(355,5,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,55,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(305,65,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(315,45,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(285,55,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,40,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloudsnew
    
    //cloud3
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,90,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,95,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud4
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,115,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(230,120,5,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(240,115,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke10(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1 going off screen
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(370,0,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,0,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(355,3,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(305,25,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(310,30,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(325,40,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(310,45,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,35,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloudsnew
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(270,70,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,75,6,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,115,11,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(255,100,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(250,115,7,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
}

function smoke11(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud1  off screen
//    ctx.beginPath();
//    ctx.fillStyle = colourSmoke;
//    ctx.arc(370,0,12,0, 2*Math.PI);
//    ctx.fill();
//    ctx.closePath();
//    
//    ctx.beginPath();
//    ctx.fillStyle = colourSmoke;
//    ctx.arc(330,0,15,0, 2*Math.PI);
//    ctx.fill();
//    ctx.closePath();
//    
//    ctx.beginPath();
//    ctx.fillStyle = colourSmoke;
//    ctx.arc(355,3,14,0, 2*Math.PI);
//    ctx.fill();
//    ctx.closePath();
    
    //cloud2 going off screen
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(320,10,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(310,15,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(335,0,18,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(325,22,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(300,5,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloudsnew
    
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(280,55,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(295,50,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,65,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(270,105,12,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,90,15,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(255,110,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    
}

function smoke12(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    
    //cloud2 going off screen
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,0,14,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(350,0,18,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(330,-5,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(309,-2,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //cloudsnew
    //cloud1
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,50,18,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(300,39,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,55,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(305,55,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    
    //cloud2
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(280,105,10,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(290,90,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(275,90,13,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(265,105,8,0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = colourSmoke;
    ctx.arc(260,90,8,0, 2*Math.PI);
    ctx.fill();
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

function animateSmoke(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    ctx.clearRect(0,0, c.width, c.height);
    counter++;
    if (counter == 13){
        counter = 7;
    }
    drawHouse();
    switch(counter){
        case 1:
            smoke1();
            break;
        case 2:
            smoke2();
            break;
        case 3:
            smoke3();
            break;
        case 4:
            smoke4();
            break;
        case 5:
            smoke5();
            break;
        case 6:
            smoke6();
            break;
        case 7:
            smoke7();
            break;
        case 8:
            smoke8();
            break;
        case 9:
            smoke9();
            break;
        case 10:
            smoke10();
            break;
        case 11:
            smoke11();
            break;
        case 12:
            smoke12();
            break;
        
            

    }
    
}

function drawHouse(){
    chimney();
    mainBuilding();
    entranceBuilding();
    sideOfStairs();
    sideHouseRight();
    stairsTop();
    stairsFront();
    pillar();
    door();
    frontHole();
    frontWindow();
    sideWindowEntrance();
    sideWindowOne();  
    sideWindowTwo();
    sideBuildingHole();
    sideHousePlanks();
    roofBricks();
    chimneyBricks();
    
}

function toggleSpeed(rng){
    clearInterval(animation);
    animation = setInterval(function () {
        animateSmoke()
    }, rng.value);
}


function main() {
    //Run main program here.
    drawHouse();
    animation
    
}
