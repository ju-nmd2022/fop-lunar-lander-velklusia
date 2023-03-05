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
