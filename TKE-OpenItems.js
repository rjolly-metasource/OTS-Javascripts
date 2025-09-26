//SET Plant Code
var pjNum = '123c456';
if (pjNum) {
    newPlant = pjNum.replace(/[0-9]/g, '');
    console.log("The Plant Code is " + newPlant);
}
/*
//Trim trailing 0
var inputString = "3,744.000"
var decimalIndex = inputString.indexOf('.');
//console.log(decimalIndex)

if (decimalIndex !== -1 && decimalIndex + 4 < inputString.length) {
    // Remove the third digit after the decimal point
    return (inputString.substring(0, decimalIndex + 3) + inputString.substring(decimalIndex + 4));
}
console.log("The correct amount is " + inputString.substring(0, decimalIndex + 3) + inputString.substring(decimalIndex + 4));

//SET Job number
let jobNum = "ABCPS123XYZ";

let containsPS = /PS\d+/.test(jobNum);

if (containsPS) {
    console.log("The string contains 'PS' followed by one or more digits.");
    pjNum = jobNum.substring(0, 6)
    console.log("P-Job Number is " + pjNum)
} else {
    console.log("Job Number is " + pjNum);

}
*/
