var amount = '241.35CR';
var creditAmount;
if (amount.endsWith('CR')) {
    creditAmount = amount.replace("CR", "");
    console.log("-" + creditAmount);
}
else if (!amount) {
    console.log("n/a");
}
else {

    console.log(amount);
}