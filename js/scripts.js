//Business Interface
function helloNeighbor(number){
  const hello3 = "Won't you be my neighbor?";
  const hello2 = "Boop!";
  const hello1 = "Beep!";
  let robogerNum = number.toString();
  let roboger = "";
  let output = []
 for (let i = 0, length=robogerNum.length; i < length; i += 1){
    output.push(+robogerNum.charAt(i));
  } 
    if (output.includes(3)){
    roboger = hello3;
    return roboger
   }else if (output.includes(2)){
    roboger = hello2;
    return roboger
   }else if (output.includes(1)){
    roboger = hello1;
    return roboger
}

};
function howdyRoboger(number){
  let output = [];
  let howdy = "";
  let howdy2 = "";
  for (i=0; i<=number; i++){
    output.push(i.toString());
    howdy = output.toString();
  }
  for (let i = howdy.length; i > 0; i--){
    output.push(howdy.charAt(i));
  } 
   if (howdy.includes(3)){
  howdy2= howdy.replaceAll(3, "Won't you be my neighbor?").replaceAll(2, "Boop!").replaceAll(1, "Beep!")
  return howdy2
}
}
 /* if (howdy.includes(2)){
  howdy2=howdy.replaceAll(2, "Boop!")
 }
 if (howdy.includes(1)){
  howdy2 = .replaceAll(1, "Beep!")
 }
 return howdy2 */
 
 



//User Interface

$(document).ready(function() {
  $("form#entry").submit(function(event){
    event.preventDefault()
    const robogerAccess = $("#add1").val();
    const roboger1 = howdyRoboger(robogerAccess);
    $("#result").html(roboger1);
})
});



