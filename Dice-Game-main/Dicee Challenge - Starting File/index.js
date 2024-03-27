console.log("You are going to play a dice game created by :K.Giritharan");
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagesource1="./images/dice"+randomnumber1+".png";
var randomimagesource2="./images/dice"+randomnumber2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    var heading=document.querySelector("h1");
    heading.innerHTML="player 1 wins";

}
else if(randomnumber2>randomnumber1){
    var heading=document.querySelector("h1");
    heading.innerHTML="player 2 wins";
}
else{
    var heading=document.querySelector("h1");
    heading.innerHTML="DRAW !!!";
}