

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var keypressed=this.innerHTML;
  makeSound(keypressed);
   buttonAnimation(keypressed);
  });
  
}
function makeSound(keypressed1){
    switch(keypressed1){
        case "w":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            case "a":
                var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
                case "s":
                    var audio=new Audio("./sounds/snare.mp3");
                    audio.play();
                    break;
                    case "d":
                        var audio=new Audio("./sounds/tom-1.mp3");
                        audio.play();
                        break;
                        case "j":
                            var audio=new Audio("./sounds/tom-2.mp3");
                            audio.play();
                            break; 
                            case "k":
                                var audio=new Audio("./sounds/tom-3.mp3");
                                audio.play();
                                break;
                                case "l":
                                    var audio=new Audio("./sounds/tom-4.mp3");
                                    audio.play();
                                    break;
                                default:
                                    console.log(keypressed);
    
       }
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function buttonAnimation(key){
    var classname="."+key;
    document.querySelector(classname).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(classname).classList.remove("pressed");
    },100);
}
