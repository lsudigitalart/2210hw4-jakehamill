var fx = 20;
var fy = 30;
var fs = 60;
var score = 0

var ex = 600
var ey = 450
var ed = 45

var speed = 20;
var speed2 = 5;
var xpos = 0;


function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  background(0,50,150,70);

  textSize(40);
  text(score, width/2, 40);

  ellipseMode(CENTER);
  xpos = xpos + speed2;
  if((xpos > width) || (xpos < 0))
  {
    speed2 = speed2 * -1;
  }
  fill(255,0,0,100);
  ellipse(xpos, 300, 40, 40);


   fill(255,0,0,100);
   ellipse(fx,fy,fs);

    if(keyIsPressed) {
  if(key == "w"){
    println("forward");
    fy-=speed;
  }
  if(key == "a"){
    println("left");
    fx-=speed;
  }
  if(key == "s"){
    println("back");
    fy+=speed;
  }
  if(key == "d"){
    println("right");
    fx+=speed;
  }


  }
}
