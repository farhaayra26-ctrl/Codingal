function managePark() {

  let zoo = document.getElementById("zoo");

     let tigerZone = document.getElementById("tigerZone");
  let giraffeZone = document.getElementById("giraffeZone");
  let monkeyZone = document.getElementById("monkeyZone");
  let output = document.getElementById("output");


 
  let parentNodeName = tigerZone.parentNode.id;

  let firstChildZone = zoo.children[0].id;
  let secondChildZone = zoo.children[1].id;
  let nextSiblingZone = tigerZone.nextElementSibling.id;
  let previousSiblingZone = monkeyZone.previousElementSibling.id;
 let elementNodeType = tigerZone.nodeType;
  let textNodeType = tigerZone.firstChild.nodeType;


  tigerZone.style.backgroundColor = "#ffe4c4";
  giraffeZone.style.backgroundColor = "#e0f2d8";
  monkeyZone.style.backgroundColor = "#fce4ec";


  tigerZone.querySelector("h2").innerHTML = "Tiger Area Updated";
  giraffeZone.querySelector("h2").innerHTML = "Giraffe Area Updated";
  monkeyZone.querySelector("h2").innerHTML = "Monkey Area Updated";

  output.innerHTML =
    "<strong>Park Structure:</strong><br>" +
       "Parent of Tiger Area: " + parentNodeName + "<br>" +
    "First child of Park: " + firstChildZone + "<br>" +
     "Second child of Park: " + secondChildZone + "<br><br>" +

     "<strong>Sibling Details:</strong><br>" +
    "Next sibling of Tiger Area: " + nextSiblingZone + "<br>" +
       "Previous sibling of Monkey Area: " + previousSiblingZone + "<br><br>" +






    "<strong>Node Types:</strong><br>" +
    "Tiger Area element node type: " + elementNodeType + "<br>" +
    "Tiger Area first child node type: " + textNodeType + "<br><br>" +

    "<strong>Park Updates:</strong><br>" +
    
    
    
    
"The area headings and background colors have been changed using JavaScript.";
}