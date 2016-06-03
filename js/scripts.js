$(document).ready(function() {
  $("button#travelSubmit").click(function(event){
      event.preventDefault();
      var age = parseInt($("input#age").val());
      var beverage = $("select#beverage").val();
      var rain = $("select#rain").val();
      var movie = $("select#movie").val();

      $("#honolulu").hide();
      $("#france").hide();
      $("#morocco").hide();
      $("#australia").hide();


  if ( age >= 31 && (beverage === "Coffee" || beverage === "Tea") && (movie === "a" || movie === "b") ) {
    alert("yo");
    $("#france").show();
 }
 else if ( age <= 30 && (beverage === "Coffee" || beverage === "Tea") && (movie === "a" || movie === "b") ) {
   alert("hi")
   $("#morocco").show();
 }
 if ( age >= 31 && (beverage === "Coffee") && (movie === "c" || movie === "d") ) {
   alert("yo");
   $("#australia").show();
}
else if ( age <= 30 && (beverage === "Coffee") && (movie === "c" || movie === "d") ) {
  alert("hi")
  $("#honolulu").show();
}
 else if (age >= 31 && (beverage === "Juice" || beverage === "Milk") && movie != "d" ) {
    alert("Whats up")
    $("#honolulu").show();
}
else if (age <= 30 && (beverage === "Juice" || beverage === "Milk") && movie != "d" ) {
  alert("Whats 2")
  $("#australia").show();
}
else if (age >= 31 && (beverage === "Juice" || beverage === "Tea") && movie === "d" ) {
   alert("Whats up11")
   $("#morocco").show();
}
 else if (age <= 30 && (beverage === "Juice" || beverage === "Coffee") && movie === "d" ) {
   alert("Whats 21")
   $("#australia").show();
}
else if (age >= 31 && beverage != "Tea" && movie === "d" ) {
   alert("Whats up112")
   $("#australia").show();
}
else if (age <= 30 && beverage != "Juice" && movie === "d" ) {
   alert("Whats up113")
   $("#honolulu").show();
 }

});
});
