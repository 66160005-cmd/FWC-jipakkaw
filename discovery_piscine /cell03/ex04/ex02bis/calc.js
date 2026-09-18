$(document).ready(function () {
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  $("#calcForm").on("submit", function (e) {
    e.preventDefault();

    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    const operator = $("#operator").val();
    let ans = 0;

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Error :(");
      alert("Error :(");
      return;
    }
    if (num1 < 0 || num2 < 0) {
      console.log("Error :(");
      alert("Error :(");
      return;
    } else if (operator == "+") {
      ans = num1 + num2;
    } else if (operator == "-") {
      ans = num1 - num2;
    } else if (operator == "*") {
      ans = num1 * num2;
    } else if (operator == "/") {
      ans = num1 / num2;
    } else if (operator == "%") {
      ans = num1 % num2;
    }

    if (isNaN(ans)) {
      console.log("It's over 9000!");
      alert("It's over 9000!");
    } else {
      console.log(ans);
      alert(ans);
    }
  });
});
