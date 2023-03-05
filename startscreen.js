const numberOfAsteroids = 700;
let asteroids = [];

function setup() {
  createCanvas(600, 600);
  stroke(255);
  strokeWeight(1);
  
  for(let i = 0; i < numberOfAsteroids; i ++) {
    asteroids.push(new Asteroid(random(width), random(height)));
  }
}

