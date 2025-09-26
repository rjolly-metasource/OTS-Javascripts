
function extractNames(compName) {
  var regex = /^([^,]+),\s*([^ ]+)\s([A-Za-z])$/;
  var match = compName.match(regex);

  if (match) {
    var lastName = match[1];
    var firstName = match[2];
    var middleInitial = match[3];

    return { lastName, firstName, middleInitial };
  } else {
    return null; // Invalid format
  }
}

// Example usage:
var compName = "Doe, John D";
var result = extractNames(compName);

if (result) {
  lib.logInfo(result); // { lastName: "Doe", firstName: "John", middleInitial: "D" }
} else {
  lib.logInfo("Invalid name format.");
}