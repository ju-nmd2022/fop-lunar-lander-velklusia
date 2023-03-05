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

function draw() {
  background(0, 50);
  
  const acc = map(mouseX, 0, width, 0.25, 0.2);
  
  asteroids = asteroids.filter(asteroid => {
    asteroid.draw();
    asteroid.update(acc);
    return asteroid.isActive();
  });
  
  while(asteroids.length < numberOfAsteroids) {
    asteroids.push(new Asteroid(random(width), random(height)));
  }
}
