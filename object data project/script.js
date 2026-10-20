var student = {
    name: 'Tina',
    age: '13',
    Grade: '8',
    hobbies: 'Singing',
    fav_sport: 'Football'
};

var color = ["pink", "yellow", "purple", "orange", "green"];

document.write("Student name is : " + student.name,
"<br>","Student favorite sport is : "
+ student.fav_sport);

document.write("<br>Before Popping the colors are: " + color.join("^"));

document.write("<br>My favorite color is : " + color[3]);

color.pop();

document.write("<br>After Popping the colors are : " + color.join("*"));