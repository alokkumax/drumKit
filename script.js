// detect btn press
for (let i = 0; i < document.querySelectorAll(".drums").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    this.style.color = "red";

    var  textPressed =  this.innerHTML ;
    makeSound(textPressed);

  });
}
//detend keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
  });


  // a function which accepts String , to check those strings as cases and play sound respectively.
function makeSound(x){
  switch (x) {
    case "w":
      var audio = new Audio("sounds/1.mp3");
      audio.play();

      break;

    case "a":
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/7.mp3");
      audio.play();
      break;

    default:
      break;
  }
}