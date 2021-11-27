//Business Interface
function howdyRoboger(number){
  let output = [];
  let howdy = "";
  let howdy2 = "";
  for (i=0; i<=number; i++){
    output.push(i.toString());
    howdy = output.toString();
}
  if (howdy.includes(3)){
    howdy2= howdy.replaceAll(3, "Won't you be my neighbor?").replaceAll(2, "Boop!").replaceAll(1, "Beep!")
  return howdy2
}
};
//User Interface
$(document).ready(function() {
  $("form#entry").submit(function(event){
    event.preventDefault()
    const robogerAccess = $("#add1").val();
    const roboger1 = howdyRoboger(robogerAccess);
    $("#result").html(roboger1);
})
});



