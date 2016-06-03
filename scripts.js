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
    $("#france").show();
  }
  else if ( age <= 30 && (beverage === "Coffee" || beverage === "Tea") && (movie === "a" || movie === "b") ) {
    $("#morocco").show();
  }
  if ( age >= 31 && (beverage === "Coffee") && (movie === "c" || movie === "d") ) {
    $("#australia").show();
  }
  else if ( age <= 30 && (beverage === "Coffee") && (movie === "c" || movie === "d") ) {
    $("#honolulu").show();
  }
  else if (age >= 31 && (beverage === "Juice" || beverage === "Mamosa") && movie != "d" ) {
    $("#honolulu").show();
  }
  else if (age <= 30 && (beverage === "Juice" || beverage === "Mamosa") && movie != "d" ) {
    $("#france").show();
  }
  else if (age >= 31 && (beverage === "Juice" || beverage === "Tea") && movie === "d" ) {
    $("#morocco").show();
  }
  else if (age <= 30 && (beverage === "Juice" || beverage === "Coffee") && movie === "d" ) {
    $("#australia").show();
  }
  else if (age >= 31 && beverage != "Tea" && movie === "d" ) {
    $("#australia").show();
  }
  else if (age <= 30 && beverage != "Juice" && movie === "d" ) {
    $("#france").show();
  }
  });
});
