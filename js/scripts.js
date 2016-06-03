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


  if ( age >= 31 && beverage === "Coffee" && movie === "c" ) {
    alert("yo");
    $("#france").show();
 }
 else if ( age <= 30 && beverage === "Coffee" && movie != "c" ) {
   alert("hi")
   $("#morocco").show();
 }
 else if (age >= 31 && beverage != "Coffee" && movie != "d" ) {
    alert("Whats up")
    $("#honolulu").show();
}
else if (age <= 30 && beverage != "Coffee" && movie!= "d") {
  alert("Whats 2")
  $("#honolulu").show();
}

 //   else if ( age <= 30 && beverage === "Tea" || "Coffee" && rain === "1" || "3" && movie === "a" || "b" ) {
 //    alert("go");
 //    $("#morocco").show();
 //  }
 //
 //  else if ( age >= 31 && beverage != ("Tea" || "Coffee") && rain === ("1" || "2") && movie === ("a" || "c") ) {
 //    alert("hi");
 //    $("#honolulu").show();
 //  }
 //  else if ( age < 40 && beverage === "Milk" && movie === "b" ) {
 //   alert("Hello");
 //   $("#france").show();
 // }
 // // // else if ( age < 40 && beverage === "Tea" && rain === "3" && movie !== "c" ) {
 // // //   alert("what's up!");
 // // //   $("#morocco").show();
 // //
 // //
 // if ( age >= 35 && beverage === "Juice" && rain === "1" ) {
 //   alert("hi");
 //   $("#honolulu").show();
 // // }
});
});
