let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");

function sayHello() { //message opperation//
  let name = nameInput.value; //gets name value, stores it//
  let role = roleInput.value;
  let party_name = party_nameInput.value;
  output.innerText = "Welcome, " + name +  " the " + role + " to the " + party_name + "!!!";  //prints welcome (changeable) text + name value//
}

greetButton.onclick = sayHello; 
