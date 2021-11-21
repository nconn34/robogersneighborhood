//Business Interface

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  const hello0 = number;
  output = [];
  let robogerNum = number.toString();
  let roboger = "";
  for (let i = 0, length=robogerNum.length; i < length; i += 1){
    output.push(+robogerNum.charAt(i));
  }
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
  }/* else if (number === hello0) {
      roboger = number;
      console.log("howdy");
      return roboger
  }*/
};




/* for the fifth test

const number = 123456789;
output = [];
robogerNum = number.toString();

for (let i = 0, length=robogerNum.length; i < length; i += 1){
  output.push(+robogerNum.charAt(i));
}
console.log(output);
console.log(output.includes(3)) */

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  const hello0 = "Try again!";
  output = [];
  let robogerNum = number.toString();
  let roboger = "";
  for (let i = 0, length=robogerNum.length; i < length; i += 1){
  output.push(+robogerNum.charAt(i));
}
  if (output.includes(3)){
    roboger = hello3;
    console.log("howdy");
    return roboger
  } else if (output.includes(2)){
    roboger = hello2;
    console.log("howdy");
    return roboger
} else if (output.includes(1)){
    roboger = hello1;
    console.log("howdy");
    return roboger
} else if (output.includes(0)){
  roboger = hello0;
  console.log("howdy");
  return roboger
}
};



//User Interface

//Consider using UI from text-analyzer

//Look at boldPassage logic for how to look at different parts of the number

//This logic is from the programming language suggester


$(document).ready(function() {
  $('#lang1').hide();
  $('#lang2').hide();
  $('#lang3').hide();

  $("#entry").submit(function(event) {
    event.preventDefault()
    const quest1 = parseInt($("#add1").val());
    let entryCode = quest1

   if (entryCode === 3) {
      $('#lang1').show();
    } else if (entryCode === 2) {
      $('#lang2').show();
    } else if (entryCode === 1) {
      $('#lang3').show();
    }  
  });
  
  $("#tryagain").click(function() {
    $('#lang1').hide("");
    $('#lang2').hide("");
    $('#lang3').hide("");
    });
}); 
