//Business Interface

function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  const hello0 = "Try again!";
  const output = [];
  let robogerNum = number.toString();
  let roboger = "";

  /* Loop for return array of number range, not sure where to include in code

function helloNeighbor(number){
  const output = [];
    for (i=0; i<=number; i++){
      output.push(i.toString());
    }
  return output.toString();*/

  //Trying to put a loop inside of a loop... here goes nothing...
  // I feel like I am close but just not getting the syntax correct...
  //for (i=0; i<=number; i++){
    //output.push(i.toString());
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
}
  }
// output.push(i.toString());
 // return output.push(i.toString());
//




//User Interface

$(document).ready(function() {
  $("form#entry").submit(function(event){
    event.preventDefault()
    const robogerAccess = $("#add1").val();
    const roboger1 = helloNeighbor(robogerAccess);
    $("#result").html(roboger1);
})
});



