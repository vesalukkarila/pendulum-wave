
let width;
let height;
let radius;
let startAngle;
let endAngle;
let angle;
let changeOfAngle;
let swingingLeft;
//let ball;


function setup() {
  //define global variables
  width = 600;
  height = 600;
  radius = 200;
  startAngle = PI/4;
  endAngle = 3*PI/4;
  angle = startAngle;
  changeOfAngle = PI/180;
  swingingLeft = true;

  // 
  createCanvas(width, height);
  background(20);
  
}

function draw() {
  background(20);

  //change angle
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


  //calculate this frame's x and y based on angle
  let endX = width/2 + cos(angle) * radius;
  let endY =  sin(angle) * radius;
  //draw
  stroke("Aquamarine");
  strokeWeight(1);
  line(width/2, 0, endX, endY);
}



