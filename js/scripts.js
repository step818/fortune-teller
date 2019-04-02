$(document).ready(function() {
  var genderType
  var hairType
  var foodType
  var musicType
  var array

  $("form#fortune_survey").submit(function(event) {
    event.preventDefault();
    userInput();
    $("#fortune_result").show();
    });

    function userInput(){
      $("input:checkbox[name=gender]:checked").each(function(){
        var genderType = $(this).val();
        $('#fortune_result').append("You chose " + genderType + "<br>");
      });
      $("input:checkbox[name=haircolor]:checked").each(function(){
        var hairType = $(this).val();
        $('#fortune_result').append("You chose " + hairType + "<br>");
      });
      $("input:checkbox[name=food]:checked").each(function(){
        var foodType = $(this).val();
        $('#fortune_result').append("You chose " + foodType + "<br>");
      });
      $("input:checkbox[name=music]:checked").each(function(){
        var musicType = $(this).val();
        $('#fortune_result').append("You chose " + musicType + "<br>");
      });
    }
    var array = [];
    array.concat("input:checkbox[name=gender]:checked");
    array.concat("input:checkbox[name=haircolor]:checked");
    array.concat("input:checkbox[name=food]:checked");
    array.concat("input:checkbox[name=music]:checked");


    if (4 <= array <= 10) {
      $(".fortune_output").text("You will have a marvelous future. Keep doing you!");
      console.log(array);  }
    // else if (11 <= array.length <= 15 )


});
