// function //
function calculateScore() {
  var finalScore = 0;

  // Get values from Breached SCP-999 dropdown
  var breached999 = document.getElementById("breached999").value;
  if (breached999 == "Within CZ") {
    finalScore += 3;
  } else if (breached999 == "Outside CZ") {
    finalScore += 5;
  } else if (breached999 == "Outside Sector C") {
    finalScore += 10;
  }

  // Get values from Breached SCP-173 dropdown
  var breached173 = document.getElementById("breached173").value;
  if (breached173 == "Within CZ") {
    finalScore += 7;
  } else if (breached173 == "Outside CZ") {
    finalScore += 10;
  } else if (breached173 == "Outside Sector C") {
    finalScore += 15;
  }

  // Get values from Breached SCP-606 dropdown
  var breached606 = document.getElementById("breached606").value;
  if (breached606 == "Within CZ") {
    finalScore += 7;
  } else if (breached606 == "Outside CZ") {
    finalScore += 10;
  } else if (breached606 == "Outside Sector C") {
    finalScore += 15;
  }

  // Get values from Breached SCP-096 dropdown
  var breached096 = document.getElementById("breached096").value;
  if (breached096 == "Within CZ") {
    finalScore += 15;
  } else if (breached096 == "Outside CZ") {
    finalScore += 20;
  } else if (breached096 == "Outside Sector C") {
    finalScore += 25;
  }

  // Get values from Breached SCP-106 dropdown
  var breached106 = document.getElementById("breached106").value;
  if (breached106 == "Within CZ") {
    finalScore += 15;
  } else if (breached106 == "Outside CZ") {
    finalScore += 20;
  } else if (breached106 == "Outside Sector C") {
    finalScore += 25;
  }

  // Get value from Library Held Period input
  var libraryHeldPeriod = parseInt(document.getElementById("libraryHeldPeriod").value);
  if (libraryHeldPeriod == 3) {
    finalScore += 5;
  } else if (libraryHeldPeriod == 7) {
    finalScore += 10;
  } else if (libraryHeldPeriod == 10) {
    finalScore += 15;
  }

  // Get value from Breach Shelter Held Period input
  var breachShelterHeldPeriod = parseInt(document.getElementById("breachShelterHeldPeriod").value);
  if (breachShelterHeldPeriod == 5) {
    finalScore += 5;
  } else if (breachShelterHeldPeriod == 10) {
    finalScore += 10;
  } else if (breachShelterHeldPeriod == 15) {
    finalScore += 15;
  }

  // Get value from Class-D Hostage input
  var classDHostage = parseInt(document.getElementById("classDHostage").value);
  finalScore += classDHostage * 3;

  // Get value from FP Hostage input
  var fpHostage = parseInt(document.getElementById("fpHostage").value);
  finalScore += fpHostage * 5;

  // Get value from VIP Hostage input
  var vipHostage = parseInt(document.getElementById("vipHostage").value);

  if (vipHostage == 3) {
    finalScore += 5;
  } else if (vipHostage == 7) {
    finalScore += 10;
  } else if (vipHostage == 10) {
    finalScore += 15;
  }
  }

  // Display the final score
  document.getElementById("finalScore").innerHTML = "Final Score: " + finalScore;

  // Determine final outcome based on final score
  if (finalScore > 90) {
  document.getElementById("finalOutcome").innerHTML = "Final Outcome: Raiding Party Win";
  } else if (finalScore >= 80 && finalScore <= 90) {
  document.getElementById("finalOutcome").innerHTML = "Final Outcome: Draw";
  } else {
  document.getElementById("finalOutcome").innerHTML = "Final Outcome: Defending Party Win";
  }

// Get all the input elements
var inputs = document.getElementsByTagName("input");
var selects = document.getElementsByTagName("select");

// Add event listeners to all input elements
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", calculateScore);
}

// Add event listeners to all select elements
for (var i = 0; i < selects.length; i++) {
  selects[i].addEventListener("change", calculateScore);
}
