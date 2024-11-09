
//window
let width;
let height;
//pendulum string
let lengthOfPendulum;
let startAngle;
let endAngle;
let angle;
let changeOfAngle;
let swingingLeft;
//ball at the end of pendulum
let ball;
let ballRadius;


function setup() {
  //define global variables
  width = 600;
  height = 600;
  lengthOfPendulum = 200;
  startAngle = PI/4;
  endAngle = 3*PI/4;
  angle = startAngle;
  changeOfAngle = 0.01;
  swingingLeft = true;
  ball = new Ball(0, 0, 0);
  ballRadius = 20;
  // 
  createCanvas(width, height);
  background(20);
  
}

function draw() {
  background(20);

  changeAngleOfPendulum();

  //calculate this frame's x and y based on angle
  let endX = width/2 + cos(angle) * lengthOfPendulum;
  let endY =  sin(angle) * lengthOfPendulum;
  //draw
  stroke("Aquamarine");
  strokeWeight(1);
  line(width/2, 0, endX, endY);
  ball.draw(endX, endY, ballRadius);
}



class Ball{
  constructor(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  
  draw(x, y, radius){
    fill(20);
    circle(x, y, radius);
  }
}

function changeAngleOfPendulum(){
  if (swingingLeft && angle < endAngle){
    //increase angle by X
    angle += changeOfAngle;
  }else if (swingingLeft && angle >= endAngle){
  //change swinginLeft to false and decresease angle by X
  swingingLeft = false;
  angle -= changeOfAngle;
  }

  if (!swingingLeft && angle > startAngle){
    //decrease angle by X
    angle -= changeOfAngle;
  }else if (!swingingLeft && angle <= startAngle){
    //change swingingLeft to true and increase angle X
    swingingLeft = true;
    angle += changeOfAngle;
  }
}

