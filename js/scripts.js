
// Business Logic
function Player (finalScore, totalScore, roundScore, turn){
  this.finalScore = [finalScore];
  this.totalScore = [totalScore];
  this.roundScore = [roundScore];
  this.turn = turn;
}

function combineScore(points){
  var sum = 0;
  for (i = 0; i < points.length; i++) {
    sum += points[i];
  }
  return sum;
}
function roll(){
  var rollResult = Math.floor((Math.random()*6) +1);
  return rollResult;
}
Player.prototype.bust = function (playerOne, playerTwo, thisRoll){
  if(thisRoll === 1){
    // debugger;
     this.roundScore = [];
     if (playerOne.turn === true){
       playerOne.turn = false;
       playerTwo.turn = true;
     }
     else {
       playerOne.turn = true;
       playerTwo.turn = false;
     }
     return true;
  }
  return false;
}
function setActivePlayer(playerOne, playerTwo, activePlayer){
  if (playerOne.turn === true){
    return playerOne;
  } else {
    return playerTwo;
  }
}

//User Interface Logic
$(document).ready(function(){
  var playerOne = new Player(0,0,0,true);
  var playerTwo = new Player(0,0,0,false);
  var activePlayer = "";


  console.log(activePlayer, "1")

  $("#roll").click(function(){
    // debugger;
    activePlayer = setActivePlayer(playerOne, playerTwo, activePlayer);
    $("#bustAlert").hide();
    var rollScore = roll();
    var one = activePlayer.bust(playerOne, playerTwo, rollScore);
    if(one === true){ rollScore = 0;
    $("#bustAlert").show();};
    console.log(activePlayer, "3");
    activePlayer.roundScore.push(rollScore);
    $("#rollScore").text(rollScore);
    $("#sumOfRolls").text(combineScore(activePlayer.roundScore));

  });

  $("#hold").click(function(){
    var points = activePlayer.roundScore;
    var sumOfRound = combineScore(points);
    activePlayer.totalScore.push(sumOfRound);
    activePlayer.roundScore = [0];
    var finalPoints = activePlayer.totalScore;
    var totalSum = combineScore(finalPoints);
    activePlayer.finalScore.push(totalSum);
    if (activePlayer === playerOne){
      $("#playerOneTotal").text(totalSum);
    } else {
      $("#playerTwoTotal").text(totalSum);
    }
    if (playerOne.finalScore >= 100){
      $("#winner1").show();
    }else if(playerTwo.finalScore>= 100){
      $("#winner2").show();
    };
    if (playerOne.turn === true){
      playerOne.turn = false;
      playerTwo.turn = true;
    }
    else {
      playerOne.turn = true;
      playerTwo.turn = false;
    }
    console.log(activePlayer, "6")
  });
});
