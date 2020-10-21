var buttonColours=["red","yellow","green","pink"];


var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
$("body").keypress(function(){
  if(started===false)
  {
    $("h1").text("Level "+level);
    level+=1;
    nextSequence();
  started=true;
}
});

$("button").on("click", function(){

  var userChosenColour =$(this).attr("id");
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  var len=userClickedPattern.length;
  checkAnswer(len-1);



});
function nextSequence()
{
  $("h1").text("Level "+level);
  level+=1;
userClickedPattern=[];
  var x=Math.random();
  x=x*4;
  var y=Math.floor(x);
  var randomChosenColour=buttonColours[y];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  var audio = new Audio(randomChosenColour+ '.mp3');
  audio.play();
  playSound(randomChosenColour);
}
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] != userClickedPattern[currentLevel]) {

      var header = $('body');
      header.addClass('game-over');
setTimeout(function() {
    header.removeClass('game-over');
}, 200);
$("h1").text("Game Over!!!!! Please press a key again");
startOver();
  }
    console.log(userClickedPattern.length);
    console.log(gamePattern.length)
      if (userClickedPattern.length === gamePattern.length){


        setTimeout(function () {
          nextSequence();
        }, 1000);


}
}
//console.log(userClickedPattern);
function startOver()
{
  level=0;
  started=false;
  gamePattern=[];
}
function playSound( name)
{
  var audio = new Audio(name+ '.mp3');
  audio.play();
}
function animatePress(currentColour)
{
  $("#"+currentColour).fadeOut(200).fadeIn(200);
}
