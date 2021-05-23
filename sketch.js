var board, ludo;
var player1, player2;
var roll, num1, num2, num3, num4, num5, num6;
var gDice, bDice, rollValue;
var blue_turn, green_turn;
var randomNum;
var gPiece1_x, gPiece1_y, gPiece2_x, gPiece2_y, gPiece3_x, gPiece3_y, gPiece4_x, gPiece4_y;
var bPiece1_x, bPiece1_y, bPiece2_x, bPiece2_y, bPiece3_x, bPiece3_y, bPiece4_x, bPiece4_y;
var gPiece1, gPiece2, gPiece3, gPiece4, gp1=0, gp2=0, gp3=0, gp4=0;
var bPiece1, bPiece2, bPiece3, bPiece4, bp1=0, bp2=0, bp3=0, bp4=0;
var gPiece=0, bPiece=1;
var gpMoved=false, bpMoved=true;
var gScore, bScore;

function preload(){
    ludo=loadImage("ludo_board.png");
    roll=loadAnimation("dice/image1.png", "dice/image2.png", "dice/image3.png", "dice/image4.png", "dice/image5.png", "dice/image6.png");
    num1=loadAnimation("dice/number1.jpg");
    num2=loadAnimation("dice/number2.jpg");
    num3=loadAnimation("dice/number3.jpg");
    num4=loadAnimation("dice/number4.jpg");
    num5=loadAnimation("dice/number5.jpg");
    num6=loadAnimation("dice/number6.jpg");
}

function setup(){
    canvas=createCanvas(1280, 550);

    board=createSprite(640, 275);
    board.scale=1.15;
    board.addImage(ludo);

    gDice=createSprite(320, 40);
    gDice.scale=0.5;
    gDice.addAnimation("1", num1);
    gDice.addAnimation("2", num2);
    gDice.addAnimation("3", num3);
    gDice.addAnimation("4", num4);
    gDice.addAnimation("5", num5);
    gDice.addAnimation("6", num6);
    gDice.addAnimation("rolling", roll);
    bDice=createSprite(960, 510);
    bDice.scale=0.5;
    bDice.addAnimation("1", num1);
    bDice.addAnimation("2", num2);
    bDice.addAnimation("3", num3);
    bDice.addAnimation("4", num4);
    bDice.addAnimation("5", num5);
    bDice.addAnimation("6", num6);
    bDice.addAnimation("rolling", roll);

    green_turn=true;
    blue_turn=false;

    rollValue=0;

    gPiece1_x=[437, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 898, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 419, 456, 492, 529, 566, 596];
    gPiece1_y=[109, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 312, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 275, 275, 275, 275, 275, 245];
    gPiece2_x=[474, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 898, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 419, 456, 492, 529, 566, 596];
    gPiece2_y=[ 72, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 312, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 275, 275, 275, 275, 275, 265];
    gPiece3_x=[511, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 898, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 419, 456, 492, 529, 566, 596];
    gPiece3_y=[109, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 312, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 275, 275, 275, 275, 275, 285];
    gPiece4_x=[474, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 898, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 419, 456, 492, 529, 566, 596];
    gPiece4_y=[146, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 312, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 275, 275, 275, 275, 275, 305];

    bPiece1_x=[806, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 382, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 861, 825, 788, 751, 714, 684];
    bPiece1_y=[404, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 238, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 275, 275, 275, 275, 275, 245];
    bPiece2_x=[843, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 382, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 861, 825, 788, 751, 714, 684];
    bPiece2_y=[441, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 238, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 275, 275, 275, 275, 275, 265];
    bPiece3_x=[806, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 382, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 861, 825, 788, 751, 714, 684];
    bPiece3_y=[478, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 238, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 275, 275, 275, 275, 275, 285];
    bPiece4_x=[768, 862, 825, 787, 751, 714, 677, 677, 677, 677, 677, 677, 640, 603, 603, 603, 603, 603, 603, 566, 529, 492, 456, 419, 382, 382, 382, 419, 456, 492, 529, 566, 603, 603, 603, 603, 603, 603, 640, 677, 677, 677, 677, 677, 677, 714, 751, 788, 825, 861, 898, 898, 861, 825, 788, 751, 714, 684];
    bPiece4_y=[441, 312, 312, 312, 312, 312, 349, 386, 423, 459, 496, 533, 533, 533, 496, 459, 423, 386, 349, 312, 312, 312, 312, 312, 312, 275, 238, 238, 238, 238, 238, 238, 201, 164, 127,  90,  54,  18,  18,  18,  54,  90, 127, 164, 201, 238, 238, 238, 238, 238, 238, 275, 275, 275, 275, 275, 275, 305];

    gPiece1=createSprite(200, 200, 30, 30);
    gPiece1.draw=function(){
        fill(160, 255, 0);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    gPiece2=createSprite(200, 200, 30, 30);
    gPiece2.draw=function(){
        fill(160, 255, 0);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    gPiece3=createSprite(200, 200, 30, 30);
    gPiece3.draw=function(){
        fill(160, 255, 0);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    gPiece4=createSprite(200, 200, 30, 30);
    gPiece4.draw=function(){
        fill(160, 255, 0);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    bPiece1=createSprite(300, 300, 30, 30);
    bPiece1.draw=function(){
        fill(0, 206, 255);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    bPiece2=createSprite(300, 300, 30, 30);
    bPiece2.draw=function(){
        fill(0, 206, 255);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    bPiece3=createSprite(300, 300, 30, 30);
    bPiece3.draw=function(){
        fill(0, 206, 255);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    bPiece4=createSprite(300, 300, 30, 30);
    bPiece4.draw=function(){
        fill(0, 206, 255);
        stroke("black");
        strokeWeight(1);
        ellipse(0,0,30,30);
    }
    setPosition();
    gScore=0;
    bScore=0;
}

function draw(){
    background("black");
    fill("lightgreen");
    rect(164, 0, 200, 80);
    fill("lightblue");
    rect(916, 470, 200, 80);
    fill(rgb(0, 255, 0));
    ellipse(204, 40, 60, 60);
    fill("blue");
    ellipse(1076, 510, 60, 60);
    fill("white");
    rect(280, 00, 80, 80);
    rect(920, 470, 80, 80);

    if(gScore!==4 || bScore!==4){
        if(green_turn===true && bpMoved===true){
            drawDice(gDice);
        }else if(blue_turn===true && gpMoved===true){
            drawDice(bDice);
    }else{
        textSize(30);
        text("GAME OVER", width/2-100, height/2);
    }
    }

    highlight_turn()
    drawSprites();

    if(gScore==4 || bScore==4){
        textSize(30);
        stroke("black");
        strokeWeight(5);
        fill("white");
        text("GAME OVER", width/2-100, height/2+10);
    }
}

function setPosition(){
    gPiece1.x=gPiece1_x[gp1];
    gPiece1.y=gPiece1_y[gp1];
    gPiece1.scale=1;
    gPiece2.x=gPiece2_x[gp2];
    gPiece2.y=gPiece2_y[gp2];
    gPiece2.scale=1;
    gPiece3.x=gPiece3_x[gp3];
    gPiece3.y=gPiece3_y[gp3];
    gPiece3.scale=1;
    gPiece4.x=gPiece4_x[gp4];
    gPiece4.y=gPiece4_y[gp4];
    gPiece4.scale=1;

    bPiece1.x=bPiece1_x[bp1];
    bPiece1.y=bPiece1_y[bp1];
    bPiece1.scale=1;
    bPiece2.x=bPiece2_x[bp2];
    bPiece2.y=bPiece2_y[bp2];
    bPiece2.scale=1;
    bPiece3.x=bPiece3_x[bp3];
    bPiece3.y=bPiece3_y[bp3];
    bPiece3.scale=1;
    bPiece4.x=bPiece4_x[bp4];
    bPiece4.y=bPiece4_y[bp4];
    bPiece4.scale=1;
}

var piecee=gPiece;
function drawDice(dice){
    if(gScore!==4 && bScore!==4){
        if(green_turn===true || blue_turn===true){
            if(gpMoved===true || bpMoved===true){
                if(mousePressedOver(dice)){
                    dice.scale=0.3;
                    dice.changeAnimation("rolling", roll);
                    randomNum=Math.round(random(1, 6));
                    setTimeout(displayNumber, 1000);
                    setTimeout(checkNumberAndMovePiece, 1500);
                    //setTimeout(highlight_turn, 1000)
                    if(green_turn===true){
                        green_turn=false;
                        blue_turn=true;
                        piecee=gPiece;
                    }else if(blue_turn===true){
                        blue_turn=false;
                        green_turn=true;
                        piecee=bPiece;
                    }
                }
            }
        }
    }else if(gScore==4 || bScore==4){
        textSize(30);
        text("GAME OVER", width/2-100, height/2);
    }
    function displayNumber(){
        switch(randomNum){
            case 1: dice.changeAnimation("1", num1);
                    dice.scale=0.5;
                    rollValue=1;
                break;
            case 2: dice.changeAnimation("2", num2);
                    dice.scale=0.5;
                    rollValue=2;
                break;
            case 3: dice.changeAnimation("3", num3);
                    dice.scale=0.5;
                    rollValue=3;
                break;
            case 4: dice.changeAnimation("4", num4);
                    dice.scale=0.5;
                    rollValue=4;
                break;
            case 5: dice.changeAnimation("5", num5);
                    dice.scale=0.5;
                    rollValue=5;
                break;
            case 6: dice.changeAnimation("6", num6);
                    dice.scale=0.5;
                    rollValue=6;
                break;
            default: break;
        }
    }
}

function highlight_turn(){
    if(green_turn===false && gpMoved===false){
        gPiece1.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        gPiece2.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        gPiece3.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        gPiece4.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
    }else{
        gPiece1.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        gPiece2.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        gPiece3.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        gPiece4.draw=function(){
            fill(160, 255, 0);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
    }
    if(blue_turn===false && bpMoved===false){
        bPiece1.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        bPiece2.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        bPiece3.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
        bPiece4.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(2);
            ellipse(0,0,30,30);
        }
    }else{
        bPiece1.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        bPiece2.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        bPiece3.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
        bPiece4.draw=function(){
            fill(0, 206, 255);
            stroke("black");
            strokeWeight(1);
            ellipse(0,0,30,30);
        }
    }
}

function manageP(){
    if(gp1==gp2 && gp1>0 && gPiece1.x==gPiece2.x){
        gPiece1.scale=0.8;
        gPiece2.scale=0.8;
        gPiece1.x-=5;
        gPiece1.y-=5;
        gPiece2.x+=5;
        gPiece2.y+=5;
    }else if(gp1!=gp2){
        gPiece1.scale=1;
        gPiece2.scale=1;
    }
    if(gp1==gp3 && gp1>0 && gPiece1.x==gPiece3.x){
        gPiece1.scale=0.8;
        gPiece1.x-=5;
        gPiece1.y-=5;
        gPiece3.scale=0.8;
        gPiece3.x+=5;
        gPiece3.y+=5;
    }else if(gp1!=gp3){
        gPiece1.scale=1;
        gPiece3.scale=1;
    }
    if(gp1==gp4 && gp1>0 && gPiece1.x==gPiece4.x){
        gPiece1.scale=0.8;
        gPiece1.x-=5;
        gPiece1.y-=5;
        gPiece4.scale=0.8;
        gPiece4.x+=5;
        gPiece4.y+=5;
    }else if(gp1!=gp4){
        gPiece1.scale=1;
        gPiece4.scale=1;
    }
    if(gp2==gp3 && gp2>0 && gPiece2.x==gPiece3.x){
        gPiece2.scale=0.8;
        gPiece2.x-=5;
        gPiece2.y-=5;
        gPiece3.scale=0.8;
        gPiece3.x+=5;
        gPiece3.y+=5;
    }else if(gp2!=gp3){
        gPiece2.scale=1;
        gPiece3.scale=1;
    }
    if(gp2==gp4 && gp2>0 && gPiece2.x==gPiece4.x){
        gPiece2.scale=0.8;
        gPiece2.x-=5;
        gPiece2.y-=5;
        gPiece4.scale=0.8;
        gPiece4.x+=5;
        gPiece4.y+=5;
    }else if(gp2!=gp4){
        gPiece2.scale=1;
        gPiece4.scale=1;
    }
    if(gp3==gp4 && gp3>0 && gPiece3.x==gPiece4.x){
        gPiece3.scale=0.8;
        gPiece3.x-=5;
        gPiece3.y-=5;
        gPiece4.scale=0.8;
        gPiece4.x+=5;
        gPiece4.y+=5;
    }else if(gp3!=gp4){
        gPiece3.scale=1;
        gPiece4.scale=1;
    }
    if(bp1==bp2 && bp1>0 && bPiece1.x==bPiece2.x){
        bPiece1.scale=0.8;
        bPiece2.scale=0.8;
        bPiece1.x-=5;
        bPiece1.y-=5;
        bPiece2.x+=5;
        bPiece2.y+=5;
    }else if(bp1!=bp2){
        bPiece1.scale=1;
        bPiece2.scale=1;
    }
    if(bp1==bp3 && bp1>0 && bPiece1.x==bPiece3.x){
        bPiece1.scale=0.8;
        bPiece1.x-=5;
        bPiece1.y-=5;
        bPiece3.scale=0.8;
        bPiece3.x+=5;
        bPiece3.y+=5;
    }else if(bp1!=bp3){
        bPiece1.scale=1;
        bPiece3.scale=1;
    }
    if(bp1==bp4 && bp1>0 && bPiece1.x==bPiece4.x){
        bPiece1.scale=0.8;
        bPiece1.x-=5;
        bPiece1.y-=5;
        bPiece4.scale=0.8;
        bPiece4.x+=5;
        bPiece4.y+=5;
    }else if(bp1!=bp4){
        bPiece1.scale=1;
        bPiece4.scale=1;
    }
    if(bp2==bp3 && bp2>0 && bPiece2.x==bPiece3.x){
        bPiece2.scale=0.8;
        bPiece2.x-=5;
        bPiece2.y-=5;
        bPiece3.scale=0.8;
        bPiece3.x+=5;
        bPiece3.y+=5;
    }else if(bp2!=bp3){
        bPiece2.scale=1;
        bPiece3.scale=1;
    }
    if(bp2==bp4 && bp2>0 && bPiece2.x==bPiece4.x){
        bPiece2.scale=0.8;
        bPiece2.x-=5;
        bPiece2.y-=5;
        bPiece4.scale=0.8;
        bPiece4.x+=5;
        bPiece4.y+=5;
    }else if(bp2!=bp4){
        bPiece2.scale=1;
        bPiece4.scale=1;
    }
    if(bp3==bp4 && bp3>0 && bPiece3.x==bPiece4.x){
        bPiece3.scale=0.8;
        bPiece3.x-=5;
        bPiece3.y-=5;
        bPiece4.scale=0.8;
        bPiece4.x+=5;
        bPiece4.y+=5;
    }else if(bp3!=bp4){
        bPiece3.scale=1;
        bPiece4.scale=1;
    }
}

function checkNumberAndMovePiece(){
    if(piecee===gPiece){
        gPiece1.onMousePressed=function(){
            if(piecee===gPiece){
                if(gp1===0){
                    if(rollValue===6){
                        gp1=1;
                        rollValue=0;
                        gPiece1.x=gPiece1_x[gp1];
                        gPiece1.y=gPiece1_y[gp1];
                    }
                }
                if(gp1>0 && gp1<57){
                    gp1+=rollValue;
                    if(gp1===57){
                        gScore=gScore+1
                    }
                    if(gp1>57){
                        gp1-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        gPiece1.x=gPiece1_x[gp1];
                        gPiece1.y=gPiece1_y[gp1];
                    } 
                }
                manageP();
                gpMoved=true;
                bpMoved=false;
            }else{
                return;
            }
        }
        gPiece2.onMousePressed=function(){
            if(piecee===gPiece){
                if(gp2===0){
                    if(rollValue===6){
                        gp2=1;
                        rollValue=0;
                        gPiece2.x=gPiece2_x[gp2];
                        gPiece2.y=gPiece2_y[gp2];
                    }
                }
                if(gp2>0 && gp2<57){
                    gp2+=rollValue;
                    if(gp2===57){
                        gScore=gScore+1
                    }
                    if(gp2>57){
                        gp2-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        gPiece2.x=gPiece2_x[gp2];
                        gPiece2.y=gPiece2_y[gp2];
                    } 
                }
                manageP();
                gpMoved=true;
                bpMoved=false;
            }else{
                return;
            }
        }
        gPiece3.onMousePressed=function(){
            if(piecee===gPiece){
                if(gp3===0){
                    if(rollValue===6){
                        gp3=1;
                        rollValue=0;
                        gPiece3.x=gPiece3_x[gp3];
                        gPiece3.y=gPiece3_y[gp3];
                    }
                }
                if(gp3>0 && gp3<57){
                    gp3+=rollValue;
                    if(gp3===57){
                        gScore=gScore+1
                    }
                    if(gp3>57){
                        gp3-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        gPiece3.x=gPiece3_x[gp3];
                        gPiece3.y=gPiece3_y[gp3];
                        } 
                    }
                manageP();
                gpMoved=true;
                bpMoved=false;
            }else{
                return;
            }
        }
        gPiece4.onMousePressed=function(){
            if(piecee===gPiece){
                if(gp4===0){
                    if(rollValue===6){
                        gp4=1;
                        rollValue=0;
                        gPiece4.x=gPiece4_x[gp4];
                        gPiece4.y=gPiece4_y[gp4];
                    }
                }
                if(gp4>0 && gp4<57){
                    gp4+=rollValue;
                    if(gp4===57){
                        gScore=gScore+1
                    }
                    if(gp4>57){
                        gp4-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        gPiece4.x=gPiece4_x[gp4];
                        gPiece4.y=gPiece4_y[gp4];
                    } 
                }
                manageP();
                gpMoved=true;
                bpMoved=false;
            }else{
                return;
            }
        }
    }else if(piecee===bPiece){
        bPiece1.onMousePressed=function(){
            if(piecee===bPiece){
                if(bp1===0){
                    if(rollValue===6){
                        bp1=1;
                        rollValue=0;
                        bPiece1.x=bPiece1_x[bp1];
                        bPiece1.y=bPiece1_y[bp1];
                    }
                }
                if(bp1>0 && bp1<57){
                    bp1+=rollValue;
                    if(bp1===57){
                        bScore=bScore+1
                    }
                    if(bp1>57){
                        bp1-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        bPiece1.x=bPiece1_x[bp1];
                        bPiece1.y=bPiece1_y[bp1];
                    } 
                }
                manageP();
                gpMoved=false;
                bpMoved=true;
            }else{
                return;
            }
        }
        bPiece2.onMousePressed=function(){
            if(piecee===bPiece){
                if(bp2===0){
                    if(rollValue===6){
                        bp2=1;
                        rollValue=0;
                        bPiece2.x=bPiece2_x[bp2];
                        bPiece2.y=bPiece2_y[bp2];
                    }
                }
                if(bp2>0 && bp2<57){
                    bp2+=rollValue;
                    if(bp2===57){
                        bScore=bScore+1
                    }
                    if(bp2>57){
                        bp2-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        bPiece2.x=bPiece2_x[bp2];
                        bPiece2.y=bPiece2_y[bp2];
                    } 
                }
                manageP();
                gpMoved=false;
                bpMoved=true;
            }else{
                return;
            }
        }
        bPiece3.onMousePressed=function(){
            if(piecee===bPiece){
                if(bp3===0){
                    if(rollValue===6){
                        bp3=1;
                        rollValue=0;
                        bPiece3.x=bPiece3_x[bp3];
                        bPiece3.y=bPiece3_y[bp3];
                    }
                }
                if(bp3>0 && bp3<57){
                    bp3+=rollValue;
                    if(bp3===57){
                        bScore=bScore+1
                    }
                    if(bp3>57){
                        bp3-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        bPiece3.x=bPiece3_x[bp3];
                        bPiece3.y=bPiece3_y[bp3];
                    } 
                }
                manageP();
                gpMoved=false;
                bpMoved=true;
            }else{
                return;
            }
        }
        bPiece4.onMousePressed=function(){
            if(piecee===bPiece){
                if(bp4===0){
                    if(rollValue===6){
                        bp4=1;
                        rollValue=0;
                        bPiece4.x=bPiece4_x[bp4];
                        bPiece4.y=bPiece4_y[bp4];
                    }
                }
                if(bp4>0 && bp4<57){
                    bp4+=rollValue;
                    if(bp4===57){
                        bScore=bScore+1
                    }
                    if(bp4>57){
                        bp4-=rollValue; 
                        rollValue=0;
                        return;
                    }else{
                        rollValue=0;
                        bPiece4.x=bPiece4_x[bp4];
                        bPiece4.y=bPiece4_y[bp4];
                    } 
                }
                manageP();
                gpMoved=false;
                bpMoved=true;
            }else{
                return;
            }
        }
    }
}
