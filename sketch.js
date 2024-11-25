//canvas
let width;
let height;
//pendulum wire
let lengthOfPendulum = 200;
let currentAngle;
//ball itself
let ballRadius = 20;
let ball;
let ball2;
//forces to play with
let angleAcceleration = 0;
let angleVelocity = 0;
let gravity = 0.3;

function setup() {
  currentAngle = PI / 4;

  ball = new Ball(ballRadius, currentAngle, lengthOfPendulum);
  ball2 = new Ball(ballRadius, currentAngle, lengthOfPendulum + 50);
  // canvas setup
  width = 600;
  height = 600;
  createCanvas(width, height);
  background(20);
}

function draw() {
  background(20);
  ball.swing();
  ball2.swing();
  ball.updatePosition();
  ball2.updatePosition();
  ball.draw();
  ball2.draw();
}

class Ball {
  constructor(radius, currentAngle, lengthOfPendulum) {
    this.x;
    this.y;
    this.radius = radius;
    this.currentAngle = currentAngle;
    this.lengthOfPendulum = lengthOfPendulum;
    this.angleAcceleration;
    this.angleVelocity = 0;
    this.updatePosition();
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
    fill(20);
    circle(this.x, this.y, this.radius);
  }
}
