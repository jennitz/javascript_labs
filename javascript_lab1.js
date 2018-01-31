var userhealth = 40;
var Granthealth = 10;
var defeat = 3;
var YesNo = prompt("Do you want to play?");

if (YesNo.toLowerCase() === "yes") {
  var username = prompt("What is your name?")
//prompt(username + " : ", "Click OK or Cancel for game results.");

while (userhealth >= 0 && Granthealth > 0) {
  userhealth -= Math.floor(Math.random() * 2) + 1;
  Granthealth -= Math.floor(Math.random() * 2) + 1; //how to more efficient?
  if (Granthealth <= 0 && defeat > 0) {
    defeat--;
    Granthealth = 10;
  }
  if (defeat <= 0) {
    console.log(username + " wins!");
    break;
  } else if (userhealth <= 0) {
    console.log("Too bad. Try again!")
  } else {
    console.log(username + " has " + userhealth + " health points left, Grant Chirpus has " + Granthealth + " points left and " + defeat + " defeats left.")
  }
}
} else {
  console.log('Ok. Bye.');
}
