// Memory Game
// Tyler Swartz

// Determine Pattern

var pattern = [1,2,1];
var boxesClicked = [];

function determinePattern(){

   for (var i = 0; i < pattern.length; i++){
      console.log(pattern[i]);
      
      if (pattern[i] == 1){
         setTimeout(function(){
         console.log("k");
         $(".first").fadeOut("low");
         $(".first").fadeIn("low");
         },400)
      } else if (pattern[i] == 2){
         setTimeout(function(){
         console.log("l");
         $(".second").fadeOut("low");
         $(".second").fadeIn("low");
         },800);
      }
   }
   
};

$(".first").click(function(){
   console.log("ff");
   
   boxesClicked.push("1");
   
    for (var i = 0; i < boxesClicked.length; i++){
      console.log(boxesClicked[i]);
   }
   
   if (boxesClicked.length > pattern.length){
      console.log("error");
   }
   
});

$(".second").click(function(){
   console.log("gg"); 
   
   boxesClicked.push("2");
   
   for (var i = 0; i < boxesClicked.length; i++){
      console.log(boxesClicked[i]);
   }
   
   if (boxesClicked.length > pattern.length){
      console.log("error");
   }
   
});

for (var i = 0; i < pattern.length; i++){
   for (var c = 0; c < boxesClicked.length; c++){
      if (pattern[i] === boxesClicked[i]){
         console.log("yay");
      } else {
           console.log("noes");
      }
   }
}

// M (begin)

function start(event){
   var x = event.keyCode;
   if (x == 77){
      console.log("mm");
      
      $("h1").text("Instructions: to win, you must correctly remember the order in which the two squares light up");
      
      setTimeout(function(){
         $("h1").text("");
         $("h1").text("To choose the ones that light up, you must click the red box, and blue, you must click the blue box.  Good luck!");
         $(".type").fadeOut("high");
         setTimeout(function(){
            console.log("go");
            determinePattern();
            $("h1").text("Now, please repeat that pattern by clicking the boxes at the top");
         },2000)
      },2000);
   }
};

start();

