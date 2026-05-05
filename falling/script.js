let input;
let end;
let nouns = [];
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



//p5.js
function setup() {
  createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);

  // Create words
  for (let i = 0; i < 30; i++) {
    // Add a new word to the array
    nouns.push(new Word());
  }

  // Create screen reader accessible description
  describe('Words falling on a black background.');

  input = createInput('');
  input.position(550, 640);
  input.size(300);
  input.attribute('placeholder', 'eliminate the words...');

  end = createA("http://endless.horse/", "here's a little gift...");
end.position(550, 700);
end.style("color", "white");
end.style("font-size", "20px");
end.hide();

}

function draw() {
  background(0);
  fill(255, 0, 0);
textSize(40);
// text("Test", width/2, height/2);

  // Update and display each word in the array
  let currentTime = frameCount / 1000;

  for (let word of nouns) {
    // Update each word position and display
    word.update(currentTime);
    word.display();
  }

  if (allWordsGone()) {
    end.show();
    end.position(
      width / 2 - end.width / 2,
      height / 2
    );
    }
  }


class Word {
  constructor() {
  this.posX = 0;
  this.posY = random(-height, 0);
  this.initialAngle = random(0, 360);

  this.size = random(10, 20);
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.word = random(words);
  this.color = color(random(200, 256));

  this.visible = true;
}



  update(time) {
    // Define angular speed (degrees / second)
    let angularSpeed = 35;

    // Calculate the current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size nouns fall at different y speeds
    let ySpeed = 8 / (this.size * 0.5);
    this.posY += ySpeed;

    // When noun reaches the bottom, move it to the top
    if (this.posY > height) {
      this.posY = -50;
    }
  }
  
  

display() {
  if (!this.visible) return;
 
  fill(this.color);
  noStroke();
  textSize(this.size);
  textAlign(CENTER, CENTER);
  text(this.word, this.posX, this.posY);
}
}

function keyPressed() {
  if (keyCode === ENTER) {
    let typedWord = input.value().toLowerCase().trim();

    for (let word of nouns) {
      if (word.word.toLowerCase() === typedWord) {
        word.visible = false;
      }
    }

    input.value('');
  } 
}



function allWordsGone() {
  for (let word of nouns) {
    if (word.visible) {
      return false;
    }
  }
    return true;
  }