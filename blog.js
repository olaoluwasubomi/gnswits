let one = document.getElementById("first");
let second = document.getElementById("two");
let third = document.getElementById("remove");
let color = document.getElementById("main");
const randomColor = '#' + 434141;

one.onclick = function(){
    second.style.display = "block";
    third.style.display = "block";
    one.style.display = "none";
    color.style.background = randomColor;
}

third.onclick = function(){
    one.style.display = "block";
    second.style.display = "none";
    third.style.display ="none";
    color.style.display = "block";
}
