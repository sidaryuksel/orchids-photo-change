
var pics = [
    "img/1.jpg", "img/2.jpg", 
    "img/3.jpg", "img/4.jpg", 
    "img/5.jpg", "img/6.jpg", 
    "img/7.jpg", "img/8.jpg", 
    "img/9.jpg", "img/10.jpg", 
    "img/11.jpg", "img/12.jpg", 
    "img/13.jpg", "img/14.jpg", 
    "img/15.jpg", "img/16.jpg", 
    "img/17.jpg" 
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 17){ counter = 0;}
    img.src = pics[counter]; 
    counter++;
}) 