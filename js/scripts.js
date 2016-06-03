
$(document).ready(function() {
  $("button#travelSubmit").click(function(event) {
    var beverage = $("#beverage").val();
    var rain = $("#rain").val();
    var movie = $("#movie").val();
    var age = parseInt($("input#age").val());

    $("#honolulu").hide();
    $("#france").hide();
    $("#morocco").hide();

    if (age >= 40 && rain === "1") {
        alert("hi");
      }

      // else if (age <= 50 && gender === 'Male' && food === 'Salad') {
      //   $("#rachaelRayText").show();
      // }
      // else if (age >= 50 && gender === 'Female' && food === 'Lasagna') {
      //   $("#marioBataliText").show();
      // }
  event.preventDefault();
});

  });
