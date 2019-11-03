console.log("This is working just fine?");

var startBtn = "";
var userScr = 0;
var totalScore = 0;
var matchNum = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    $("#startButton").on("click", function () {
        var ranNum = [];
        for (var i = 0; i < 1; i++) {
            var random = Math.floor(Math.random() * 120 - 19 +1) +19;
            ranNum.push(random);
        }
        $("#randNum").append("<br><hr>" + ranNum.join(""));
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
        
           console.log("this :")
        });
    };

 $(document).ready(function () {
   $("#cImg").on("click", function () {
    var ranNum = [];
        for (var i = 0; i < 1; i++) {
            var random = Math.floor(Math.random() * 12 - 9 + 1) +9;
            ranNum.push(random);
         console.log("this :" + ranNum)

     };
     $("#cImg").append("<br><hr>" + ranNum.join(""));
 });
});
 $(document).ready(function () {
   $("#cImg1").on("click", function () {
       var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() *  12 - 9 + 1) +9;
        ranNum.push(random);
     console.log("this :" + ranNum)

 };
 $("#cImg1").append("<br><hr>" + ranNum.join(""));
});
});
 $(document).ready(function () {
   $("#cImg2").on("click", function () {
       var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() *  12 - 9 + 1) +9;
        ranNum.push(random);
     console.log("this :" + ranNum)

 };
 $("#cImg2").append("<br><hr>" + ranNum.join(""));
});
});
 $(document).ready(function () {
   $("#cImg3").on("click", function () {
       var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() *  12 - 9 + 1) +9;
        ranNum.push(random);
     console.log("this :" + ranNum)

 };
 $("#cImg3").append("<br><hr>" + ranNum.join(""));
});
});
// refer back to fridge act