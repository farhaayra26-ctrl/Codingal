let fruits = ["oranges", "lychees","kiwi", "papaya"]
document.getElementById("jo").innerHTML=fruits.join("#")
document.getElementById("first_pop").innerHTML=fruits

fruits.pop();
document.getElementById("final_pop").innerHTML=fruits