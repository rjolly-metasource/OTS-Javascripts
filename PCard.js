var cardInfo = 'Card: 1140 ALLEN PASHLEY, Memo: 467086'
var name = cardInfo.match(/\d+\s([A-Za-z0-9\s]+),/)[1];
var empID = cardInfo.match(/:\s(.*?)\s[A-Z]/)[1];
var cardNum = cardInfo.match(/Memo:\s*(\d+)/)[1];
console.log("Cardholder name is " +name); // Output: name
console.log("Cardholder EMPID is " +empID); // Output: 1710
console.log("The Card number is " +cardNum);