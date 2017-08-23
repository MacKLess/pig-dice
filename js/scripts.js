//Business Logic



function roll(){
  var rollResult = Math.floor((Math.random()*100) +1);
  return rollResult;
}




//User Interface Logic
$(document).ready(function(){
  console.log("made it");

  $("#roll").click(function(event){
    event.preventDefault();
    console.log("made it");
    var rollScore = roll();
    console.log(rollScore);
    // .append();


  });
  $("#hold").click(function(event){
    event.preventDefault();


  });

});
