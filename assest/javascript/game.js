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
            var random = Math.floor(Math.random() * 120 - 19 + 1) + 19;
            ranNum.push(random);
        }
        $("#randNum").append("<br><hr>" + ranNum.join(""));
    });

$("#cImg").on("click", function (ranNum) {
    var ranNum = [];
    var random = Math.floor(Math.random() * 12 + 1);
    ranNum.push(random);
    console.log("this :" + ranNum)
    $("#cImg").append("<br><hr>" + ranNum.join(""));

});
$("#cImg1").on("click", function () {
    var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() * 12 - 9 + 1) + 9;
        ranNum.push(random);
        console.log("this :" + ranNum)

    };
    $("#cImg1").append("<br><hr>" + ranNum.join(""));
});
$("#cImg2").on("click", function () {
    var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() * 12 - 9 + 1) + 9;
        ranNum.push(random);
        console.log("this :" + ranNum)

    };
    $("#cImg2").append("<br><hr>" + ranNum.join(""));
});
$("#cImg3").on("click", function () {
    var ranNum = [];
    for (var i = 0; i < 1; i++) {
        var random = Math.floor(Math.random() * 12 - 9 + 1) + 9;
        ranNum.push(random);
        console.log("this :" + ranNum)

    };
    $("#cImg3").append("<br><hr>" + ranNum.join(""));
});
function reset() {
    $("#reset").on("click", function () {
        $("#startButton").clear();
        $("#score").empty();
        $("#cImg").empty();
        $("#cImg1").empty();
        $("#cImg2").empty();
        $("#cImg3").empty();
    });
};
});
// refer back to fridge act