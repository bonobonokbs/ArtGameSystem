
function setup() {
    createCanvas(800, 400);
    background(255, 255, 255);

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
}


function draw() {
  s.velocity.x = random(-5, 5);
    s.velocity.y = random(-5, 5);
}
