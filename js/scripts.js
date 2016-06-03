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

  if (age >= 35 && beverage === "Juice" && rain === "1") {
    alert("hi")
    $("#honolulu").show();
  }

  // else if (age >= 35 && beverage === "Coffee" && rain === "2") {
  //   alert("yo");
  //   $("#france").slideIn();

 else (age < 40 && beverage === "Milk" && movie === "b"){
   alert("Hello");
   $("#france").show();
 }


});
});
