class Superhero {

  // Constructor
  constructor(name, power, mission) {

    // The this keyword stores values inside the object
    this.name = name;
    this.power = power;
    this.mission = mission;
  }

  // Class Method
  describeHero() {
    return "<div class='hero-card'>" +
           "<p class='hero-name'>" + this.name + "</p>" +
           "<p class='hero-power'>Power: " + this.power + "</p>" +
           "<p class='hero-mission'>Mission: " + this.mission + "</p>" +
           "</div>";
  }
}

function showHeroes() {

  // Creating Objects
  let hero1 = new Superhero(
    "Shadow Coder",
    "Finding coding errors",
    "Discover and fix mistakes in programs."
  );

  let hero2 = new Superhero(
    "Lightning Pixel",
    "Fast web designing",
    "Create colorful websites for everyone."
  );

  let hero3 = new Superhero(
    "Brain Storm",
    "Solving problems",
    "Use smart ideas to complete difficult challenges."
  );

  let hero4 = new Superhero(
    "Cyber Shield",
    "Protecting data",
    "Keep important digital information safe."
  );

  document.getElementById("heroCards").innerHTML =
    hero1.describeHero() +
    hero2.describeHero() +
    hero3.describeHero() +
     hero4.describeHero();
}