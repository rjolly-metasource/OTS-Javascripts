// Example usage:
var compName = "Garcia Rivera, Jesus";
var lastName;
var firstName;
var middleInitial;

if (compName) {
var result = extractNames(compName);
console.log(result); 
if (result) {
 } else {
  console.log("Script line 50: Invalid name format.");
}
}
function extractNames(compName) {
  //var regex = /^([^,]+),\s*([^ ]+)\s([A-Za-z])$/;
  //var regex = /^([A-Za-z]+),\s([A-Za-z]+(?:\s[A-Za-z]+)*)$/;
  //var regex = /^([A-Za-z]+),(\s[A-Za-z]+)\s([A-Za-z])/;
  //var regex = /^(([\w]+)((?:[\s\-]\w+)*)\s*),\s*([\w]+(?:[\s\-]\w+)*)$/;
  var regex = /^([\w]+(?:[\s\-]\w+)*\s*),\s*([\w]+(?:[\s\-]\w+)*)$/;
  var match = compName.match(regex);
	console.log("Match value is " + match);
  if (match) {
  	console.log(match);
    var lastName = match[1];
	console.log("Last Name is "+ lastName);
    var firstName = match[2];
	console.log("First Name is "+ firstName);
	// var middleInitial = match[3];
	// console.log("Middle INITIAL is "+ middleInitial);
    // jobState.setIndexValueByName("LAST NAME", lastName, true);
    // jobState.setIndexValueByName("FIRST NAME", firstName, true);
    // jobState.setIndexValueByName("MIDDLE INITIAL", middleInitial, true);
    var fullName = (lastName + firstName);
    
    console.log("Var fullName is " + lastName +" " + firstName);
  } else {
    console.log("Invalid Format");
  }
}