$(document).ready(function() {
  var genderType
  var hairType
  var foodType
  var musicType
  var array
  var total

  $("form#fortune_survey").submit(function(event) {
    event.preventDefault();
    userInput();
    $("#fortune_result").show();
    });


    var genderNum = 0;
    var hairNum = 0;
    var foodNum = 0;
    var musicNum = 0;

    function userInput(){
      $("input:checkbox[name=gender]:checked").each(function(){
        var genderType = $(this).val();
        genderNum += 1;
        $('#fortune_result').append("You chose " + genderType + "<br>");
      });
      $("input:checkbox[name=haircolor]:checked").each(function(){
        var hairType = $(this).val();
        hairNum += 1;
        $('#fortune_result').append("You chose " + hairType + "<br>");
      });
      $("input:checkbox[name=food]:checked").each(function(){
        var foodType = $(this).val();
        foodNum += 1;
        $('#fortune_result').append("You chose " + foodType + "<br>");
      });
      $("input:checkbox[name=music]:checked").each(function(){
        var musicType = $(this).val();
        musicNum += 1;
        $('#fortune_result').append("You chose " + musicType + "<br>");
      });
      var total = genderNum + hairNum + foodNum + musicNum;
      console.log(total);

      if (total <= 7) {
        $(".fortune_output").text("You will have a marvelous future. Keep doing you!");
      } else if (total <= 12 ) {
        $(".fortune_output").text("Stop. Look both ways before crossing the street right now, or just keep walking. Up to you.");
      } else{
        $(".fortune_output").text("Just quit life. Don't do you. End now.");
      }
    }
});

// var array = [];
// array.concat("input:checkbox[name=gender]:checked");
// array.concat("input:checkbox[name=haircolor]:checked");
// array.concat("input:checkbox[name=food]:checked");
// array.concat("input:checkbox[name=music]:checked");
// if (4 <= array <= 10) {
//   $(".fortune_output").text("You will have a marvelous future. Keep doing you!");
//   console.log(array);  }
// else if (11 <= array.length <= 15 )
