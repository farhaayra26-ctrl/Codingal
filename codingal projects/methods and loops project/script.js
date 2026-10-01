
var result = "";
var number;

for (number = 1; number <= 10; number++) {
  result += number + "<br>";
}

document.getElementById("numbers").innerHTML = result;

var randomValue = Math.floor(Math.random() * 100);

document.getElementById("random").innerHTML =
  "Your random number is " + randomValue;




  
var currentDay = new Date().getDay();

document.getElementById("day").innerHTML =
  "Today's day number is " + currentDay + " (0 is Sunday)";