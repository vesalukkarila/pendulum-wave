//canvas
let width;
let height;
//pendulum wire
let lengthOfPendulum;
let changeOfAngle;
let swingingLeft;
let startAngle;
let middlePoint;
let endAngle;
let currentAngle;
//ball at the end of pendulum
let ball;
let ballRadius;

function setup() {
  //pendulum wire
  lengthOfPendulum = 200;
  startAngle = PI / 4;
  middlePoint = PI / 2;
  endAngle = (3 * PI) / 4;
  currentAngle = startAngle;
  changeOfAngle = 0.01; //rename
  swingingLeft = true;
  //Initiate Ball at the end of pendulum
  ball = new Ball(0, 0, 0);
  ballRadius = 20;
  // canvas setup
  width = 600;
  height = 600;
  createCanvas(width, height);
  background(20);
}

function draw() {
  background(20);

  changeAngleOfPendulumWithNaturalSwing();

  //calculate this frame's x and y based on angle
  let endX = width / 2 + cos(currentAngle) * lengthOfPendulum;
  let endY = sin(currentAngle) * lengthOfPendulum;
  //draw
  stroke("Aquamarine");
  strokeWeight(1);
  line(width / 2, 0, endX, endY);
  ball.draw(endX, endY, ballRadius);
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(x, y, radius) {
    fill(20);
    circle(x, y, radius);
  }
}
// TODOs
/* 
1. Put natural swing to it
- changOfAngle 0 at pi/4 and 3pi/4, changOfAngle grows to e.g. 0.1 towards pi/2 from both directions
- i.e. 0 -> 0.1
*/
function changeAngleOfPendulumWithNaturalSwing() {
  let mappedAngle = map(currentAngle, PI / 4, (3 * PI) / 4, 0.001, 0.03);
  let speed = mappedAngle;
  if (speed >= (0.0005 + 0.03) / 2) {
    speed = 0.03 - mappedAngle + 0.0005;
  }

  changeAngleOfPendulum(speed);
}

function changeAngleOfPendulum(speed) {
  if (
    swingingLeft &&
    currentAngle >= startAngle &&
    currentAngle <= middlePoint
  ) {
    console.log("vasemmalle eka puolisko");
    currentAngle += speed;
  } else if (
    swingingLeft &&
    currentAngle >= startAngle &&
    currentAngle > middlePoint &&
    currentAngle < endAngle
  ) {
    console.log("vasemmalle toka puolisko");
    currentAngle += speed;
  } else if (swingingLeft && currentAngle >= endAngle) {
    console.log("Päätepysäkki saavutettu");
    swingingLeft = false;
    currentAngle === endAngle;
    currentAngle -= speed;
  } else if (
    !swingingLeft &&
    currentAngle <= endAngle &&
    currentAngle >= middlePoint
  ) {
    console.log("toka takas");
    currentAngle -= speed;
  } else if (
    !swingingLeft &&
    currentAngle < middlePoint &&
    currentAngle > startAngle
  ) {
    console.log("eka takas");
    currentAngle -= speed;
  } else if (!swingingLeft && currentAngle <= startAngle) {
    console.log("alku saavutettu");
    swingingLeft = true;
    currentAngle === startAngle;
    currentAngle += speed;
    console.log(speed);
  }
}

// TODO
/* This equation outputs pendulum lengths, such that, each pendulum moving backward in the series (from longest to shortest)
moves faster than the one predecing it by exactly one swing over the course of the 'wave' duration
(the amount of time the pattern repeats itself)*/
// function lengthOfThisPendulum(lenghtOfLongest, numberFromLongest){
//   let waveDurationInSeconds = 90;

//   return 9.81*(waveDurationInSeconds/(2 * PI * (lenghtOfLongest + numberFromLongest + 1)));
// }
