/* function cleanSpacedLetters(input) {
  var pattern = /^(A-Za-z0-9)+[A-Za-z0-9]$/;

  // Check if the pattern matches
  if (pattern.test(input)) {
    // Replace the matched spaces
    console.log("Line 7 " + input.replace(pattern, ''));
  }
  else{
  // Return original string if no match
  console.log(input);
}
}
// Example usage:
var input = "M O N T H L Y  T E R M I N A L  R E P O R T";
var cleaned = cleanSpacedLetters(input); */


function cleanSpacedText(input) {
  // Step 1: Split the string by 2 or more spaces (word boundaries)
  var rawWords = input.trim().split(/\s{2,}/);

  // Step 2: Remove spaces within each word
  var cleanedWords = [];
  for (var i = 0; i < rawWords.length; i++) {
    cleanedWords.push(rawWords[i].replace(/\s/g, ''));
  }

  // Step 3: Join the cleaned words with a single space
  return cleanedWords.join(' ');
}

// Example usage
var messyText = "M O N T H L Y   C A R D H O L D E R   I N T E R C H A N G E   I N F O R M A T I O N";
console.log(cleanSpacedText(messyText));
// Output: "MONTHLY CARDHOLDER INTERCHANGE INFORMATION"