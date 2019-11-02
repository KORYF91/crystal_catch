console.log("This is working just fine?");

var startBtn = "";
var userScr = 0;
var totalScore = 0;
var matchNum = 0;

$(document).ready(function () {
    $("#startButton").on("click", function () {
        var ranNum = [];
        for (var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() *3);
            ranNum.push(random);
        }
        $("#randNum").prepend("<br><hr>" + ranNum.join(""));
    });
});

function totalScore(){
    userScr += 1
    return userScr;
};
$(document).ready(function(){
    $(userScr).click(function(){
        var getIncreaseValue = increment();
        $("#userTotal").append(getIncreaseValue)
    });
});
function crystal (){
}
    $(document).ready(function () {
        $(".cImg").on("click", function () {
    console.log("this :")

});
});