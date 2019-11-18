//mouse states and mouse events on sprites
//click and hold the mouse button while overing on the sprites

var asterisk;
var ghost;
var draggedSprite;

function setup() {
  createCanvas(800, 400);

  asterisk = createSprite(600, 200);
  asterisk.setCollider('circle', 0, 0, 64);



function draw() {
  background(255, 255, 255);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  //if a sprite is mouseActive true I can check if the mouse is over its collider
  //and if the button is pressed
  if(ghost.mouseIsOver)
    ghost.rotation-= 10;

  ghost.visible = !ghost.mouseIsPressed;

  drawSprites();
}
