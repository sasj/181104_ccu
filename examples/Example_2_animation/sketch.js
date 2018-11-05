// variables
var diameter = 100;
var angle = 0;

function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(240);

  // for loop = (start;end;iteration)
  for (var x = 100; x < 400; x += 5) {

    var offset = x / 2; // play with the number to change the pattern
    var d1 = (sin(angle + offset) * diameter); // sin function of animation

    // ellipse(x position, y position, width, height)  
    ellipse(x, (height / 2) + d1, d1, d1);
    angle += 0.0002; // speed of animation

    print(d1); // print information in the console
  }

}