//Business Interface

function howdyRoboger(number){
  let output = [];
  for (i=0; i<=number; i++){
    output.push(i.toString());
  }
  return output.toString();
};
  function helloNeighbor(number){
    const hello3 = "Won't you be my neighbor?";
    const hello2 = "Boop!";
    const hello1 = "Beep!";
    let robogerNum = number.toString();
    let roboger = "";
    let output = []
    for (let i = 0, length=robogerNum.length; i < length; i += 1){
      output.push(+robogerNum.charAt(i));
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
  
}
};

//User Interface

$(document).ready(function() {
  $("form#entry").submit(function(event){
    event.preventDefault()
    const robogerAccess = $("#add1").val();
    const roboger1 = helloNeighbor(robogerAccess);
    $("#result").html(roboger1);
})
});



