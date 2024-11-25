//canvas
let width;
let height;
//pendulum wire
let lengthOfPendulum = 300;
let currentAngle;
//ball itself
let ballRadius = 20;
let ball;
let ball2;
//forces to play with
let angleAcceleration = 0;
let angleVelocity = 0;
let gravity = 3;

let pendulumWave = [];
let colors = [
  "brown",
  "green",
  "purple",
  "blue",
  "brown",
  "orange",
  "darkgreen",
  "yellow",
  "red",

  "black",
  "yellow",
  "red",
  "orange",
  "blue",
  "brown",
  "white",
];

function setup() {
  currentAngle = PI / 6;

  for (let i = 0; i < 16; i++) {
    pendulumWave.push(
      new Ball(
        ballRadius,
        currentAngle,
        lengthOfPendulum - i * (PI * PI),
        colors[i]
      )
    );
  }

  // canvas setup
  width = 600;
  height = 600;
  createCanvas(width, height);
  background(20);
}

function draw() {
  background(20);
  pendulumWave.forEach((ball) => {
    ball.draw();
    ball.swing();
    ball.updatePosition();
  });
  let timeInSeconds = millis() / 1000;
  console.log(timeInSeconds.toFixed(2));
  // console.log(length(1));
}

class Ball {
  constructor(radius, currentAngle, lengthOfPendulum, color) {
    this.x;
    this.y;
    this.radius = radius;
    this.currentAngle = currentAngle;
    this.lengthOfPendulum = lengthOfPendulum;
    this.angleAcceleration;
    this.angleVelocity = 0;
    this.updatePosition();
    this.color = color;
  }

  swing() {
    this.force = gravity * sin(this.currentAngle);
    this.angleAcceleration = (-1 * this.force) / this.lengthOfPendulum;
    this.angleVelocity += this.angleAcceleration;
    this.currentAngle += this.angleVelocity;
  }

  updatePosition() {
    this.x = width / 2 + sin(this.currentAngle) * this.lengthOfPendulum;
    this.y = cos(this.currentAngle) * this.lengthOfPendulum;
  }

  draw() {
    stroke("Aquamarine");
    strokeWeight(1);
    line(width / 2, 0, this.x, this.y);
    fill(this.color);
    circle(this.x, this.y, this.radius);
  }
}
/* This equation outputs pendulum lengths such that each pendulum movinfg backward 
in the series moves faster than the one preceding it by exactly one swing over the 
course of the wave duration
n = number of pendulum from the longest, i.e. 1 is longest, 2 is second longest
timeMax = how many seconds before the wave starts from the beginning*/
// function length(n) {
//   let timeMax = 24;
//   let length = 9.8 * pow(timeMax / (6.28 * (23 + n + 1)), 2);
//   return length;
// }
