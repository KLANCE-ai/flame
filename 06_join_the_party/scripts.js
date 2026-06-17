let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");

function sayHello() { //message opperation//
  let name = ratingInput.value; //gets name value, stores it//

  output.innerText = "you rated" + rating + " thats pretty cool broo";  //prints welcome (changeable) text + name value//
}

greetButton.onclick = sayHello; 
