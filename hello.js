function setup()
{
   createCanvas(400, 500);

}

function draw()
{
    // noFill(), stroke(), strokeWeight(), ellipse(), line(), and text()
   drawRingsBoxStar();
   drawLogo();

}
function drawRingsBoxStar(){
    drawGreenLine2();
    drawYellowLine2();
    drawBlackLine2();
    drawRedLine2();
    drawBlueLine2();
    drawBlueLine();
    drawBlackLine();
    drawGreenLine();
    drawRedLine();
    drawBlueCircle();
    drawYellowCircle();
    drawBlackCircle();
    drawGreenCircle();
    drawRedCircle();
}
    
function drawBlueCircle(){
    stroke("blue");
    strokeWeight(3.5);
    fill('rgb(107, 226, 239)');
    noFill();
    ellipse(150,400,70,70);
    
}

function drawYellowCircle(){
    stroke("yellow");
    strokeWeight(3.5);
    fill(255, 204, 0);
    noFill();
    ellipse(190,430,70,70);
    
}

function drawBlackCircle(){
    stroke("black");
    strokeWeight(3.5);
    fill('rgb(107, 226, 239)');
    noFill();
    ellipse(230,400,70,70);

}

function drawGreenCircle(){
    stroke("green");
    strokeWeight(3.5);
    fill(255, 204, 0);
    noFill();
    ellipse(270,430,70,70);
    
}

function drawRedCircle(){
    stroke("red");
    strokeWeight(3.5);
    fill('rgb(107, 226, 239)');
    noFill();
    ellipse(310,400,70,70);

}

function drawLogo(){
    stroke("black");
    var p = 'PyeongChang2018';
    textSize(40);
    text(p, 30, 350);
    textStyle(BOLD);
    fill();
    strokeWeight(4);
}
    
function drawRedLine(){
    stroke("red");
    strokeWeight(10);
    line(50, 250, 160, 250);
    
}
function drawGreenLine(){
    stroke("green");
    strokeWeight(10);
    line(140, 150, 140, 230);
}

function drawBlackLine(){
    stroke("black");
    strokeWeight(10);
    line(70, 150, 70, 230);
}

function drawBlueLine(){
    stroke("blue");
    strokeWeight(10);
    line(50, 130, 160, 130);
}

function drawBlueLine2(){
    stroke("blue");
    strokeWeight(10);
    line(250, 105, 280, 160);
}
    
function drawRedLine2(){
    stroke("red");
    strokeWeight(10);
    line(250, 105, 220, 160);
}

function drawBlackLine2(){
    stroke("black");
    strokeWeight(10);
    line(250, 105, 250, 50);
    
}

function drawYellowLine2(){
    stroke("yellow");
    strokeWeight(10);
    line(250,105,200,80);
}

function drawGreenLine2(){
    stroke("Green");
    strokeWeight(10);
    line(250,105,305,80);
}
    
    