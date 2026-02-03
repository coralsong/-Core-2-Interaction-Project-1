// Define array to hold snowflake objects
let snowflakes = [];
let words = [
  "bible",
  "John Wiclif",
  "Cipriano de Valera",
  "Luther",
  "Vulgate",
  "holy book",
  "Bianker",
  "octavo",
  "Holy Writ",
  "Bombay",
  "Arabic Numbers",
  "Leaf",
  "Anchor",
  "Illustration",
  "Secret",
  "Talisman",
  "The Book of Sand",
  "Beginning",
  "End",
  "First page",
  "flyleaf",
  "Last page",
  "infinite",
  "religious",
  "Presbyterian",
  "Conscience",
  "Orkney Islands",
  "Scotland",
  "Stevenson",
  "Hume",
  "Robbie Burns",
  "British Museum",
  "Wiclif Bible",
  "Ancestors",
  "Bibiliophile",
  "India",
  "Norwegian Jail",
  "The Thousand and One Nights",
  "Treasure",
  "Alphabetically",
  "Insomnia",
  "Summer",
  "Monstrous",
  "Reality",
  "Fire",
  "Planet",
  "Smoke",
  "Hide",
  "Leaf",
  "Forest",
  "Retirement",
  "Mexico Street",
  "Argentine National Library",
  "Staircase",
  "Basement",
  "Maps",
  "Periodicals",
  "Door",
  "Shelves"
];




function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier"); // or any system font


  angleMode(DEGREES);

  // Create snowflake objects
  for (let i = 0; i < 30; i++) {
    // Add a new snowflake object to the array
    snowflakes.push(new Snowflake());
  }

  // Create screen reader accessible description
  describe('Snowflakes falling on a black background.');
}

function draw() {
  background(0);
  fill(255, 0, 0);
textSize(40);
// text("Test", width/2, height/2);

  // Update and display each snowflake in the array
  let currentTime = frameCount / 1000;

  for (let flake of snowflakes) {
    // Update each snowflake position and display
    flake.update(currentTime);
    flake.display();
  }
}

// Define the snowflake class

class Snowflake {
  constructor() {
  this.posX = 0;
  this.posY = random(-height, 0);
  this.initialAngle = random(0, 360);

  this.size = random(10, 20); // text size now
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.word = random(words); // 👈 new
  this.color = color(random(200, 256));
}


  update(time) {
    // Define angular speed (degrees / second)
    let angularSpeed = 35;

    // Calculate the current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size snowflakes fall at different y speeds
    let ySpeed = 8 / (this.size * 0.5);
    this.posY += ySpeed;

    // When snowflake reaches the bottom, move it to the top
    if (this.posY > height) {
      this.posY = -50;
    }
  }
  

display() {
  fill(this.color);
  noStroke();
  textSize(this.size);
  textAlign(CENTER, CENTER);
  text(this.word, this.posX, this.posY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// User types on Webpage 
let name = prompt("What is your name?");
console.log(`Hello, ${name}!`);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});