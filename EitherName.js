// Assume 'inputVariable' is the variable you want to test
var compName = "Garcia Shapiro, Isabella"; // Replace with the actual input

// Define the regex patterns
var regex1 = /^([A-Za-z]+),(\s[A-Za-z]+\s)([A-Za-z])/;
var regex2 = /^([\w]+(?:[\s-]\w+)*\s*),\s*([\w]+(?:[\s-]\w+)*)$/;

// Test the input against each regex pattern
if (regex1.test(compName)) {
    var lastName;
    var firstName;
    var middleInitial;


function extractNames(compName) {
    var regex = /^([A-Za-z]+),(\s[A-Za-z]+)\s([A-Za-z])/;
    var match = compName.match(regex);
	console.log("Match value is " + match);
  if (match) {
  	console.log(match);
    var lastName = match[1];
	console.log("Last Name is "+ lastName);
    var firstName = match[2];
	console.log("First Name is "+ firstName);
	var middleInitial = match[3];
	console.log("Middle INITIAL is "+ middleInitial);
    // jobState.setIndexValueByName("LAST NAME", lastName, true);
    // jobState.setIndexValueByName("FIRST NAME", firstName, true);
    // jobState.setIndexValueByName("MIDDLE INITIAL", middleInitial, true);
    } else {
    console.log("Invalid Format");
  }
}
    console.log("First block executed");
   
} else if (regex2.test(compName)) {
    // Execute the second block of code
    
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
    // Handle the case where neither regex matches
    console.log("No matching pattern found");
}
}