
class Computer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  generateAttackDamage(){
    return getRandomInt(1, 5);
  }
}

class Character extends Computer{
  constructor(name, health, healsRemaining, wins) {
  super(name, health);
  this.healsRemaining = healsRemaining;
  this.wins = 0;
  }
  generateAttackDamage(){
    return getRandomInt(1, 3);
  }
  heal(){
    this.health += getRandomInt(1, 10);
    this.healsRemaining--;
  }
}

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

//
function startCombat(userName){
  var grant = new Computer('Grant', 10);
  var user = new Character(userName, 40, 2);
  var ULTIMATE_VICTORY = 5;
  while (user.wins < ULTIMATE_VICTORY && user.health > 0) {
    var response = prompt("Would you like to attack, heal, or quit?");
    if (response.toLowerCase() === 'quit') {
      console.log('You decided to end the game.');
      return;
    }
    if (response.toLowerCase() === 'attack'){
    user.health -= grant.generateAttackDamage();
    grant.health -= user.generateAttackDamage();
    console.log(user.name + " has " + user.health + " health points left.");
    console.log(`${grant.name} has ${grant.health} HP left and ${user.wins} defeats.`);
  }
    else if (response.toLowerCase() === 'heal' && user.healsRemaining){
    user.heal();
    console.log(user.name + " healed & has " + user.health + " health points.");
    } else if (response.toLowerCase() === 'heal') {
      console.log(user.name + " has no heals remaining, choose between attack or quit.");
      } else {
    console.log("You must choose to attack, heal, or quit.");
    continue;
  }
    if (grant.health <= 0){
      user.wins++;
      grant.health = 10;
      console.log(user.name + " has a victory!");
    }
    if (user.health <= 0){
      console.log(grant.name + " won. Try again!")
    }
    if (user.wins === ULTIMATE_VICTORY){
      console.log(user.name + " won! GAME OVER.");
    }
  }
}
function getRandomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}
