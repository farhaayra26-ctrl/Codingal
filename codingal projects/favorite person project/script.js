
var favouritePerson = {
  name:         "Maya Rahman",
  relationship: "My Sister",
  activity:     "Reading Books",
  city:         "Dhaka"
};


var nameEl = document.getElementById("name");
var relationshipEl = document.getElementById("relationship");

nameEl.textContent = favouritePerson.name;
relationshipEl.textContent = favouritePerson.relationship;


var activityEl = document.getElementById("activity");
var cityEl = document.getElementById("city");

activityEl.textContent = favouritePerson["activity"];
cityEl.textContent = favouritePerson["city"];


var codeEl = document.getElementById("codeDisplay");

codeEl.textContent =
  'var favouritePerson = {\n' +
  '  name:         "' + favouritePerson.name + '",\n' +
  '  relationship: "' + favouritePerson.relationship + '",\n' +
  '  activity:     "' + favouritePerson["activity"] + '",\n' +
  '  city:         "' + favouritePerson["city"] + '"\n' +
  '};';