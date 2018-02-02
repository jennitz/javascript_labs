var userHealth = 40;
var grantHealth = 10;
var defeat = 3;

startGame();

function startGame() {
  var YesNo = prompt("Do you want to play?");
  if (YesNo.toLowerCase() === "yes") {
    var userName = prompt("What is your name?");
    startCombat(userName);
  } else {
    console.log('Ok. Bye.');
  }
}
function startCombat(userName) {
  while (userHealth > 0 && defeat > 0) {
    var response = prompt("Would you like to attack or quit?");
    if (response.toLowerCase() === 'quit') {
      console.log('You decided to end the game.');
      return;
    }
    if (response.toLowerCase() === 'attack') {
    userHealth -= getDamage();
    grantHealth -= getDamage();
    console.log(userName + " has " + userHealth + " health points left.")
    console.log("Grant Chirpus has " + grantHealth + " HP left and " + defeat + " defeats left.")
  } else {
    console.log("You must choose to attack or quit.");
    continue;
  }
    if (grantHealth <= 0) {
      defeat--;
      grantHealth = 10;
      console.log(userName + " won!");
    } else {
      console.log("Grant Chirpus won. Try again!")
    }
    }
}
  function getDamage(playerHealth) {
    return Math.floor(Math.random() * 5) + 1;
  }
