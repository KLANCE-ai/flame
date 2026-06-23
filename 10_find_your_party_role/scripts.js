function matchRole() {
  let positionElement = document.querySelector('input[name="alignment"]:checked');
  let message = "";
  let voltron = document.getElementById('voltron')
  voltron.hidden = false
  

  if (!positionElement) {
    message = "Please choose a party alignment.";
  } else {
    let position = positionElement.value;
    let selectedIssues = [];

    let issueBoxes = document.querySelectorAll('.issue');
    for (let i = 0; i < issueBoxes.length; i++) {
      if (issueBoxes[i].checked) {
        selectedIssues.push(issueBoxes[i].value);
      }
    }

    if (selectedIssues.length == 0) {
      message = "Please select at least one issue you care about.";
    } else if (position == "angry" && selectedIssues.includes("red")) {
      message = "red paladin pls go anger managament!";
    } else if (position == "smart" && selectedIssues.includes("green")) {
      message = "green paladin, frigging nerd..."
    } else if (position == "smart" && selectedIssues.includes("yellow")) {
      message = "yellow paladin, do you like food perchance?";
    } else if (position == "flirtatous" || selectedIssues.includes("blue")) {
      message = "bleu paladin #lance mcclain is my bias!!!";
    } else {
      message = "youre coran coran the gourgerous man!";
    }
  }

  document.getElementById("matchResult").innerText = message;
}

document.getElementById("matchButton").onclick = matchRole;
