
// Business Logic
function Player (totalScore, roundScore){
  this.totalScore = [] ;
  this.roundScore = roundScore[];
}

function addArray(){
var total = playerOne.reduce(function(sum, value) {
  return sum + value;
}, 0);
}


function roll(){
  var rollResult = Math.floor((Math.random()*6) +1);
  return rollResult;
}
function collectRoll(){

}



//User Interface Logic
$(document).ready(function(){
  // console.log("made it");

//create instances of Player (1 &2)
  var playerOne = [];
  var playerTwo = [];
  $("#roll").click(function(event){
    event.preventDefault();

    // console.log("made it");
    var rollScore = roll();
    playerOne.push(rollScore);
    var check = $("#rollScore").append(playerOne);

    console.log(playerOne);

  });
  $("#hold").click(function(event){
    event.preventDefault();

  });

});
