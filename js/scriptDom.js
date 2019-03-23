document.addEventListener("DOMContentLoaded", function(){


var h1 = document.querySelector("h1");
console.log(h1);


var title = document.querySelectorAll(".title")[0];
console.log(title);

var data= document.querySelector("[data-animation]");
console.log(data);


var divs = document.querySelectorAll("div");
console.log(divs.length);

var oferts = document.querySelectorAll(".oferts");
console.log(oferts.length);

var hrefs = document.querySelectorAll("[href]")
console.log(hrefs.length);

var home = document.getElementById("home");
console.log(home);

var dataDir = document.querySelector('[data-direction]');
console.log(dataDir);

var block = document.querySelector(".block");
console.log(block);

var nav = document.querySelectorAll("nav li");
console.log(nav);

var par = document.querySelectorAll('div p');
console.log(par);

var artDiv = document.querySelectorAll("article div")
    console.log(artDiv);
    
    var artifirst = document.querySelectorAll("article.first");
    var h1arti = document.querySelectorAll("article.first h1");
    console.log(h1arti);


});