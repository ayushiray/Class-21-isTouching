var fixedRect, movingRect; //global variables
var go1, go2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.velocityX = 3;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -3;

  go1 = createSprite(200, 50, 50, 80);
  go1.shapeColor = "yellow";
  go1.velocityX = 3;

  go2 = createSprite(500, 50, 50, 80);
  go2.shapeColor = "yellow";
  go2.velocityX = -3;
}

function draw() {
  background("black");  

 if(isTouching(fixedRect, movingRect)){
fixedRect.shapeColor = "pink";
movingRect.shapeColor = "green";
 }

 else{
   fixedRect.shapeColor = "white";
   movingRect.shapeColor = "red";
 }
  
 if(isTouching(go1, go2)){
  go1.shapeColor = "purple";
  go2.shapeColor = "blue";
   }
  
   else{
     go1.shapeColor = "yellow";
     go2.shapeColor = "yellow";
   }

  drawSprites();
}
