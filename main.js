function setup() {
  createCanvas(700, 600);
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new star());
  }
}

const numberOfStars = 250;
const distance = 35;
let stars = [];

class star {
constructor() {
  this.x = random(width);
  this.y = random(height);
  this.r = random(1, 5);
  this.xSpeed = random(-1, 1);
  this.ySpeed = random(-1, 1);
}

  update() {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  this.wrap();
}

wrap() {
  if (this.x > width) this.x = 0;
  if (this.y > height) this.y = 0;
  if (this.x < 0) this.x = width;
  if (this.y < 0) this.y = height;
}

draw() {
  circle(this.x, this.y, this.r);
}

drawLines(stars) {
  for (let star of stars) {
    if (dist(this.x, this.y, star.x, star.y) < distance) {
      stroke('rgba(255,255,255,0.2)');
      line(this.x, this.y, star.x, star.y);
    }
  }
}
}

function rocket() {
  push();
  noStroke();
  fill(255, 185, 0);
  ellipse(300, 640 + random(35, 55), 20, 60);
  fill(255, 255, 0);
  ellipse(300, 640 + random(35, 50), 15, 40);

  //Wings on sides
  noStroke();
  fill(102, 0, 204);
  arc(300, 676, 40, 40, PI, 0, CHORD);
  //Rocket
  stroke(2);
  fill(204, 153, 255);
  ellipse(300, 640, 30, 80);
  //Window
  noStroke();
  fill(0);
  ellipse(300, 632 , 20, 20);
  fill(255);
  ellipse(300, 632 , 16, 16);
  //Front wing
  stroke(2);
  fill(102, 0, 204);
  ellipse(300, 672, 5, 30);
  pop();
}

function moon() {
  noStroke();
  fill (192,192,192);
  ellipse(340, 900, 1000);
  fill (220,220,220);
  ellipse(340, 900, 985);

  fill (169,169,169);
  ellipse(170, 580, 90);
  fill(192,192,192);
  ellipse(170, 580, 80);

  fill (169,169,169);
  ellipse(240, 480, 40);
  fill (192,192,192);
  ellipse(240, 480, 30);

  fill (169,169,169);
  ellipse(540, 530, 60);
  fill (192,192,192);
  ellipse(540, 530, 50);

  fill (169,169,169);
  ellipse(390, 470, 80);
  fill (192,192,192);
  ellipse(390, 470, 70);

  fill (169,169,169);
  ellipse(390, 610, 40);
  fill (192,192,192);
  ellipse(390, 610, 30);

  fill (169,169,169);
  ellipse(50, 550, 40);
  fill (192,192,192);
  ellipse(50, 550, 30);

  fill (169,169,169);
  ellipse(120, 480, 20);
  fill (192,192,192);
  ellipse(120, 480, 15);

  fill (169,169,169);
  ellipse(680, 600, 60);
  fill (192,192,192);
  ellipse(680, 600, 50);
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 255);
  for (let star of stars) {
    star.update();
    star.draw();
    star.drawLines(stars);
  }
  moon();
  rocket();
}

