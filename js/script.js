var hum = document.querySelector(".humb");
var nav = document.querySelector(".nav-list");
var link = document.querySelector(".nav-list li");


hum.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});


