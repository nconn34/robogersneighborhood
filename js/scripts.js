//Business Interface

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  const hello0 = "Try again!";
  let output = [];
  let robogerNum = number.toString();
  let roboger = "";
  for (let i = 0, length=robogerNum.length; i < length; i += 1){
  output.push(+robogerNum.charAt(i));
}
  if (output.includes(3)){
    roboger = hello3;
    return roboger
  } else if (output.includes(2)){
    roboger = hello2;
    return roboger
} else if (output.includes(1)){
    roboger = hello1;
    return roboger
} else if (output.includes(0)){
    roboger = hello0;
    return roboger
} else if (output.includes(4)){
    roboger = hello0;
    return roboger
} else if (output.includes(5)){
    roboger = hello0;
    return roboger
} else if (output.includes(6)){
    roboger = hello0;
    return roboger
} else if (output.includes(7)){
    roboger = hello0;
    return roboger
} else if (output.includes(8)){
    roboger = hello0;
    return roboger
} else if (output.includes(9)){
    roboger = hello0;
    return roboger
} 
};

// Below is the original function before adding in a for loop and refactoring it

/* function helloNeighbor(number){
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



//  for the fifth test

/* const number = 123456789;
output = [];
robogerNum = number.toString();

for (let i = 0, length=robogerNum.length; i < length; i += 1){
  output.push(+robogerNum.charAt(i));
}
console.log(output);
console.log(output.includes(3)) */





//User Interface

$(document).ready(function() {
  $("form#entry").submit(function(event){
    event.preventDefault()
    const robogerAccess = $("#add1").val();
    const roboger1 = helloNeighbor(robogerAccess);
    $("#result").html(roboger1);
})
});
