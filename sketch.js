var fixRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 80 );
  fixRect.shapeColor="green";
  fixRect.debug="true";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug="true";
  
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(fixRect.x-movingRect.x < fixRect.width/2+movingRect.width/2 && 
    movingRect.x-fixRect.x < fixRect.width/2+movingRect.width/2 &&
    fixRect.y-movingRect.y < fixRect.height/2+movingRect.height/2 &&
    movingRect.y-fixRect.y < fixRect.height/2+movingRect.height/2) {
     movingRect.shapeColor="red";
     fixRect.shapeColor="red";

  }

  else {
    movingRect.shapeColor="green";
    fixRect.shapeColor="green";

  }
  

  console.log(movingRect.x-fixRect.x);
  drawSprites();
}