//Sprite creation
//Click to create a new sprite with random speed
var box, s;

function setup() {
  createCanvas(800, 400);
  box = createSprite(50, 10, 100,400);

}

function draw() {
  background(255, 255, 255);

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
  drawSprites();

  box.collide(s);

}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color


  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
