function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let role = document.getElementById("roleInput").value;
  let Party_Name = document.getElementById("Party_NameInput").value;
  let message
  if (name == ''){
    messagge = 'brotaco klance needs NAMES'
  } else if (reigon == ''){
    message = 'klance died for.. nothing?????'
  } else {
    message = `Welcome ${name} from ${region}. \n Your role is ${role} in ${Party_Name}.`
  }

  let message = `Welcome ${name} from ${region}. \n Your role is ${role} in ${Party_Name}.`
  document.getElementById("output").innerText = message;
}


document.getElementById("signupButton").onclick = showSignupMessage
