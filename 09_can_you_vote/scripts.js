// Instructions in the CSS

function checkAge(){
  let age = document.getElementById("ageBox").value;
  let message = "";

  if (age == '') {
    message = "you must enter an age";
  } else if (age > 100) {
    message = "youre living legend";
  } else if (age >= 18) {
    message = "You can vote!";
  } else if (age >= 16) {
    message = "You can pre-enrol.";
  } else if (age == 0) {
    message = "bro still in the womb";
  } else {
    message = "Sorry, you can't register yet.";
  }

  document.getElementById("results").innerText = message;
}


document.getElementById("submit").onclick = checkAge
