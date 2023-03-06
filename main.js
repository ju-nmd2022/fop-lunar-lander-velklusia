const numberOfAsteroids = 700;
let asteroids = [];
let a;
let b;

function setup() {
  createCanvas(700, 600);
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new star());
  }
  for(let i = 0; i < numberOfAsteroids; i ++) {
    asteroids.push(new Asteroid(random(width), random(height)));
  }
  a = 300;
  b = 640;
}

//Main background animation
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

//Mechanics and idea behind was inspired by CodingTrain 10 minutes Starfield Challenge
// https://www.youtube.com/watch?v=17WoOqgXsRM

function animation() {
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

class Asteroid {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.prevPosition = createVector(x, y);
    
    this.velocity = createVector(0, 0);
    
    this.ang = atan2(y - (height/2), x - (width/5));
  }
  
  isActive() {
    return onScreen(this.prevPosition.x, this.prevPosition.y);
  }
  
  update(acc) {
    this.velocity.x += cos(this.ang) * acc;
    this.velocity.y += sin(this.ang) * acc;
    
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
    
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  
  draw() {
    const alpha = map(this.velocity.mag(), 0, 3, 0, 255);
    stroke(255, alpha);
    line(this.position.x, this.position.y, this.prevPosition.x, this.prevPosition.y);
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;  
}

function rocket() {
  noStroke();
  fill(255, 185, 0);
  ellipse(a, b + random(35, 55), 20, 60);
  fill(255, 255, 0);
  ellipse(a, b + random(35, 50), 15, 40);

  //Wings on sides
  noStroke();
  fill(102, 0, 204);
  arc(a, b + 36, 40, 40, PI, 0, CHORD);
  //Rocket
  stroke(2);
  fill(204, 153, 255);
  ellipse(a, b, 30, 80);
  //Window
  noStroke();
  fill(0);
  ellipse(a, b -8 , 20, 20);
  fill(255);
  ellipse(a, b -8 , 16, 16);
  //Front wing
  stroke(2);
  fill(102, 0, 204);
  ellipse(a, b + 32, 5, 30);
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
  welcomingScreen();
  moon();
  rocket();
}

function welcomingScreen(x, y) {
  for (let star of stars) {
    star.update();
    star.draw();
    star.drawLines(stars);
  }
  fill(0);
  rect(0, 30, width/1.2, 90);
  fill(255);
  textSize(20);
  textFont("Courier New");
  text("Press space to initiate", 50, 70);
  text("Press space to initiate the launching sequence...", 50, 70);
  textSize(17);
  textFont("Courier New");
  text("Lunar Lander Game by vel klusia", 50, 100);
}

function gameOverScreen(x, y) {
  for (let star of stars) {
    star.update();
    star.draw();
    star.drawLines(stars);
  }
  fill(0);
  rect(0, 30, width/2, 110);
  fill(255);
  textSize(20);
  textFont("Courier New");
  text("You lost! 🤯", 50, 70);
  textSize(17);
  textFont("Courier New");
  text("Maybe next time it is going to", 50, 100);
  text("go better for you.", 50, 120);
}

function winningScreen(x, y) {
  animation();
  fill(0);
  rect(0, 30, width/1.8, 100);
  fill(255);
  textSize(20);
  textFont("Courier New");
  text("You won! 🚀", 50, 70);
  textSize(17);
  textFont("Courier New");
  text("The mission ended up as a success.", 50, 100);
}