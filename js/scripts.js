//Business Interface

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  const hello0 = number;
  let roboger = "";
  if (number === 3){
    roboger = hello3;
    console.log("howdy");
    return roboger
  } else if (number === 2){
      roboger = hello2;
      console.log("howdy");
      return roboger
  } else if (number === 1){
      roboger = hello1;
      console.log("howdy");
      return roboger
  } else if (number === hello0) {
      roboger = number;
      console.log("howdy");
      return roboger
  }
};


//User Interface
$(document).ready(function(){

  $('#lang1').hide();
  $('#lang2').hide();
  $('#lang3').hide();
  $("form#add").submit(function(event) {
    const num1 = parseInt($("#add1").val());
    const result = num1;
    $("#result").text(result);
    $("#add").trigger("reset");
    event.preventDefault();
  });
});