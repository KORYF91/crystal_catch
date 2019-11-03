console.log("This is working just fine?");

var startBtn = "";
var userScr = 0;
var totalScore = 0;
var matchNum = 0;

$(document).ready(function () {
    $("#startButton").on("click", function () {
        var ranNum = [];
        for (var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() * 3);
            ranNum.push(random);
        }
        $("#randNum").prepend("<br><hr>" + ranNum.join(""));
    });
});

function increment() {
    userScr += 1
    return userScr;
};
$(document).ready(function () {
    $(userScr).click(function () {
        var getIncreaseValue = increment();
        $("#userTotal").append(getIncreaseValue)
    });
});
function crystal() {
    $(".crystals").on("click", function () {
        var ranNum1 = [];
        for (var i = 0; i < 1; i++) {
            var random = Math.floor(Math.random() * 2);
            ranNum1.push(random);
        }
           $("#cImg").prepend("<br><hr>" + ranNum1.join(""));
           console.log("this :")
        });
    };

 $(document).ready(function () {
   $("#cImg").on("click", function () {
         crystal
         console.log("this :")

     });
 });
 $(document).ready(function () {
   $("#cImg1").on("click", function () {
         //var getIncreaseValue = increment();
         // $("#calcScore").append(getIncreaseValue)
         console.log("this :")

     });
 });
 $(document).ready(function () {
   $("#cImg2").on("click", function () {
         //var getIncreaseValue = increment();
         // $("#calcScore").append(getIncreaseValue)
         console.log("this :")

     });
 });
 $(document).ready(function () {
   $("#cImg3").on("click", function () {
       var secretNum =crystal();
         //var getIncreaseValue = increment();
         // $("#calcScore").append(getIncreaseValue)
         console.log("this :" + secretNum);

     });
 });

// refer back to fridge act