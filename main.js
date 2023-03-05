function setup() {
  createCanvas(700, 600);
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new star());
  }
}

const numberOfStars = 250;
const distance = 35;
let stars = [];
