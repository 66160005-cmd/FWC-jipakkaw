$(document).ready(function () {
  $("#changeBgBtn").on("click", function () {
    let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    $("body").css("background-color", newColor);
  });
});
