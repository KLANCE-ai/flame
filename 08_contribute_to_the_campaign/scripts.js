let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("thankYouMessage").innerText = message;

}

function refundTendollars() {
  totalDonations = totalDonations - 10;
  let message = "okay fine i give money back";
  if (totalDonations < 0){
  totalDonations = 0
  message = 'Can\'t refund'
}
  document.getElementById("totalDisplay").innerText = "Total raised: $" - totalDonations;


if (totalDonations < 0){
  totalDonations = 0
}

 if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("giveButton").onclick = giveTenDollars
document.getElementById("refundButton").onclick = refundTenDollars

