
// Business Logic
function Player (finalScore, totalScore, roundScore){
  this.finalScore = [finalScore];
  this.totalScore = [totalScore];
  this.roundScore = [roundScore];
}


function bust(thisRoll){
  if(thisRoll > 1){
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


// function Player (totalScore, roundScore){
//   this.totalScore = [] ;
//   this.roundScore = [];
// }
//User Interface Logic
$(document).ready(function(){
  var playerOne = new Player(0,0,0);
  var playerTwo = new Player(0,0,0);

  $("#roll").click(function(){
    var rollScore = roll();
    var notOne = bust(rollScore);
    console.log(notOne);
    playerOne.roundScore.push(rollScore);
    var check = $("#rollScore").append(playerOne);
    console.log(playerOne);
    $("#rollScore").text(rollScore);

  });

  $("#hold").click(function(){

    var points = playerOne.roundScore;
    var sumOfRound = combineScore(points);
    console.log(combineScore(sumOfRound));
    playerOne.totalScore.push(sumOfRound);
    playerOne.roundScore = [0];
    $("#sumOfRolls").text(sumOfRound);
    var finalPoints = playerOne.totalScore;
    var totalSum = combineScore(finalPoints);
    playerOne.finalScore.push(totalSum);
    console.log(playerOne);
    console.log(totalSum);
    $("#playerOneTotal").text(totalSum);

  });


});
