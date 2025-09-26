const input = "Customer: ADEDA1---DAVID AELMAN";
const match = input.match(/:\s*(.*?)---/);

if (match && match[1]) {
  console.log("Extracted data:", match[1]);
} else {
  console.log("No match found.");
}
