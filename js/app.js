$(document).ready(function () {
    $("#stop").focus();
    function fizz() {
        var entry = $('#stop').val();
        if (isNaN(+entry) ===true) {
            alert("Please enter a number");
        }
        if (+entry <=0) {
            alert("Your number must be positive!");
            //$("#stop").val('');
            //$("#stop").focus();
        }
        var endNum = Math.floor(+entry);
        for (var n=1;n<=endNum;n++) {
            if(n%15===0) {
                $(".output").append("<p>FizzBuzz</p>");
            }
            else if(n%5===0) {
                $(".output").append("<p>Buzz</p>");
            }
            else if(n%3===0) {
               $(".output").append("<p>Fizz</p>");
            }
            else {
                $(".output").append("<p>" + n + "</p>");
            }
         }
          $("#stop").val('');
     }
    $("#button").click(fizz);
    $("#stop").keyup(function(event) {
        if(event.keyCode == 13) {
            $("#button").click();
        }
    });
});
