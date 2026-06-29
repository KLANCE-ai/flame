let policies = [
  "Harness geothermal vents for arcane power",
  "Guarantee spell-forging apprenticeships",
  "Forge-safe housing in high-temperature zones",
  "Universal access to enchanted tools",
  "Protect natural mana flows from over-mining",
  "FORM VOLTRON 24/7"
];

function showPolicies() {
  let list = document.getElementById("policyList");

  for (let policy of policies) {
    let item = document.createElement("li");
    item.innerText = policy;
    list.appendChild(item);
  }
}
function addPolicy(){
  let policy = document.getElementById('textInput').value
  policies.push(policy)
}

document.getElementById("showPolicies").onclick = showPolicies;
document.getElementById("addPolicyButton").onclick = addPolicy;
