
// document.querySelector("button").addEventListener("click", popupAlert);

var buttons = document.querySelectorAll("button");

var audio = new Audio("sounds/tom-1.mp3"); 

function playSound() {
    audio.play();

}

buttons.forEach(function(button) {



   button.addEventListener("click", playSound);
});


