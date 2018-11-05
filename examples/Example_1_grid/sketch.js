// variable number we can use where we want
var sz = 10;

function setup() {
  createCanvas(500, 500); // size of the canvas
}

function draw() {
  background(250); // background color in greyscale
  
  //for loop (start; end; iteration)
  for(var x = 0; x < width; x += 10) {
  	for( var y = 0; y < height; y += 50){  
      noFill();
      // fill(x/2,y/2,255);
      strokeWeight(2); // thickness of the stroke
      stroke(100,0,200); // stroke color in RGB
      // ellipse (x pos, y pos, size);
  		ellipse(x,y, sz+(x/10) );  //  you can use x or y from the for loop to change the size
      
    }
  }
  

}
