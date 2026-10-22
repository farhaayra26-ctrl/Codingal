function checkBirthday() {

  // Null and Undefined
  let birthdayGift = null;
  let birthdayPlan;

  // Block Scope using let and const
  const studentName = "Farhah";
  const birthdayMonth = 5;
  const birthdayDate = 20;

  let message = "";
  let countdownText = "";

  // The Date Object
  let today = new Date();
  let currentYear = today.getFullYear();

  let birthday = new Date(currentYear, birthdayMonth - 1, birthdayDate);

  // Comparison Operator with if statement
  if (birthday < today && birthday.toDateString() !== today.toDateString()) {
    birthday = new Date(currentYear + 1, birthdayMonth - 1, birthdayDate);
  }

  let timeDifference = birthday - today;
  let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Comparison Operators and if/else Conditional Statements
  if (daysLeft === 0) {
    message = "Happy Birthday, " + studentName + "! Today is your special day!";
  } else if (daysLeft <= 7) {
    message = "Your birthday is almost here, " + studentName + "!";
  } else {
    message = "Keep counting, " + studentName + "! Your birthday is coming soon.";
  }

  // String Concatenation
  let finalMessage = "Student Name: " + studentName + "<br>";
  finalMessage = finalMessage + "Today's Date: " + today.toDateString() + "<br>";
  finalMessage = finalMessage + "Birthday Date: " + birthday.toDateString() + "<br>";
  finalMessage = finalMessage + "Message: " + message + "<br><br>";

  finalMessage = finalMessage + "Birthday Gift: " + birthdayGift + "<br>";
  finalMessage = finalMessage + "Birthday Plan: " + birthdayPlan;

  document.getElementById("daysBox").innerHTML = daysLeft;
  document.getElementById("result").innerHTML = finalMessage;

  // While Loop
  let day = 1;

  while (day <= 5) {
    countdownText = countdownText + "Countdown check " + day;
    countdownText = countdownText + ": Birthday excitement loading...<br>";
    day++;
  }

  document.getElementById("countdown").innerHTML = countdownText;
}