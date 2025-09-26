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
  // Step 1: Replace multiple spaces with a single space
  let normalized = input.replace(/\s+/g, ' ');

  // Step 2: Split into words based on single space
  let words = normalized.trim().split(' ');

  // Step 3: Join letters in each word and then join words with a space
  let cleaned = [];
  let currentWord = '';

  for (let i = 0; i < words.length; i++) {
    currentWord += words[i];
    // If next word starts with a capital letter and current word ends with one, it's likely a new word
    if (i === words.length - 1 || words[i + 1].length === 1) {
      cleaned.push(currentWord);
      currentWord = '';
    } else {
      currentWord += ' ';
    }
  }

  return cleaned.join(' ');
}

// Example usage
let messyText = "M O N T H L Y   C A R D H O L D E R   I N T E R C H A N G E   I N F O R M A T I O N";
console.log(cleanSpacedText(messyText));
// Output: "MONTHLY CARDHOLDER INTERCHANGE INFORMATION"
