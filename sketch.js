var obj1,obj2
var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,150,50,70);
  obj1 = createSprite(100, 300, 50, 50);
  obj2 = createSprite(400,300,50,70);
  fixed.shapeColor = 'green'
  moving.shapeColor = 'green'
  obj1.shapeColor = 'blue'
  obj2.shapeColor = 'yellow'
  obj1.velocityX = 3
  obj2.velocityX = -3
  fixed.debug = true;
  moving.debug = true;
}

function draw() {
  background(255,255,255); 
  moving.x = mouseX
  moving.y = mouseY 
 if (isTouching(moving,fixed)){
  moving.shapeColor = "red";
  fixed.shapeColor = "red";
 } else {
  moving.shapeColor = "green";
  fixed.shapeColor = "green";
 }
 bounceoff (obj1,obj2)
  drawSprites();
}
function isTouching (object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y -object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
  return true
}
else {
 // movingRect.shapeColor = "green";
 //fixedRect.shapeColor = "green";
  return false
}
}
function bounceoff(object1,object2) {
  if (object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}