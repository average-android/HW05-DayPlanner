var dataElement = document.querySelector("#currentDay");

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var saveData = $(this).siblings(".description").val();
    console.log(saveData);
    var hourID = $(this).parent().attr("id");
    console.log(hourID);
    localStorage.setItem(hourID, saveData);
});

$("#9am .description").val(localStorage.getItem("9am"));

var currentTime = moment().format("H");
var time9 = 9;

console.log(currentTime);

if (currentTime == time9) {
    $("#9am .description").addClass("present");
} else if (currentTime > time9) {
    $("#9am .description").addClass("past");
} else if (currentTime < time9) {
    $("#9am .description").addClass("future");
}
