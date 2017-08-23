var playerOne = [];
var playerTwo = [];

//Business Logic



function roll(){
  var rollResult = Math.floor((Math.random()*100) +1);
  return rollResult;
}
function collectRoll(){

}



//User Interface Logic
$(document).ready(function(){
  // console.log("made it");

  $("#roll").click(function(event){
    event.preventDefault();
    // console.log("made it");
    var rollScore = roll();
    playerOne.push(rollScore);
    $("#rollScore").append(rollScore);
    console.log(playerOne);

  });
  $("#hold").click(function(event){
    event.preventDefault();

  });

});
