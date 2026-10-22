function prof(){

let name = "Archimedes"
let score = 1111
let highSc= 2222
let level = ""
let team;//team will now have undefined

let check = score == highSc
let rank
if(score>=220){

rank = "Gold"

}
else if(score>= 50){
rank = "Silver"

}
else{
rank = "Bronze"
}
let hr = new Date().getHours()
let greet
if(hr<12){
    greet = "Good morning!"
}
else if(hr<=16){
    greet ="Good afternoon"
}
else{
    greet = "Good Day"
}
let stars = ""
let count = 0
while (count<5){
    stars += "* "
    count++
}
document.getElementById("name").innerHTML = name
document.getElementById("score").innerHTML = score
document.getElementById("highest-score").innerHTML = score + "out of" + highSc
document.getElementById("rank").innerHTML = rank
document.getElementById("greet").innerHTML = greet
document.getElementById("stars").innerHTML = stars
document.getElementById("level").innerHTML = level
document.getElementById("team").innerHTML = team



}