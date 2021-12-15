var rect1;
function setup() {
  createCanvas(500,500);
  rect1 = createSprite(250,250,30,30);
  rect1.shapeColor = "lightgreen";
}

function draw() 
{
  background("lightblue");
  
  if(keyDown(RIGHT_ARROW)) {
    rect1.position.x+=5;
  }

  if(keyDown(LEFT_ARROW)) {
    rect1.position.x-=5;
  }

  if(keyDown(UP_ARROW)) {
    rect1.position.y-=5;
  }

  if(keyDown(DOWN_ARROW)) {
    rect1.position.y+=5;
  }

  drawSprites();
}




