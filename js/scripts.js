
// Business Logic
function Player (finalScore, totalScore, roundScore){
  this.finalScore = [finalScore];
  this.totalScore = [totalScore];
  this.roundScore = [roundScore];
}

Player.prototype.bust = function (thisRoll){
  if(thisRoll === 1){
    // debugger;
     this.totalScore = [];
     this.roundScore = [];
     return true;
  }
  return false;
}

function combineScore(points){
  var sum = 0;
  for (i = 0; i < points.length; i++) {
    sum += points[i];
  }
  console.log(sum);
  return sum;
}
//
// function lastElement(array){
//   finalElement = array.pop();
//   return finalElement;
// }

function roll(){
  var rollResult = Math.floor((Math.random()*6) +1);
  return rollResult;
}

//User Interface Logic
$(document).ready(function(){
  var playerOne = new Player(0,0,0);
  var playerTwo = new Player(0,0,0);

  $("#roll").click(function(){
    $("#bustAlert").hide();
    var rollScore = roll();
    var one = playerOne.bust(rollScore);
    if(one === true){ rollScore = 0
    $("#bustAlert").show();};
    playerOne.roundScore.push(rollScore);
    // var check = $("#rollScore").append(playerOne);
    // console.log(playerOne);

    $("#rollScore").text(rollScore);
    $("#sumOfRolls").text(combineScore(playerOne.roundScore));


  });

  $("#hold").click(function(){

    var points = playerOne.roundScore;
    var sumOfRound = combineScore(points);
    console.log(combineScore(sumOfRound));
    playerOne.totalScore.push(sumOfRound);
    playerOne.roundScore = [0];
    // $("#sumOfRolls").text(sumOfRound);
    var finalPoints = playerOne.totalScore;
    var totalSum = combineScore(finalPoints);
    playerOne.finalScore.push(totalSum);
    // console.log(playerOne);
    // console.log(totalSum);
    $("#playerOneTotal").text(totalSum);

  });


});
