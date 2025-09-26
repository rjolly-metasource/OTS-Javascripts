var amount = '3,709.03CR';
var creditAmount;
if (amount.endsWith('CR')) {
    creditAmount = amount.replace("$", "($").replace("CR", "").replace(",", "");
    dollar = (creditAmount / 100).toFixed(2);
    console.log(-dollar);
}
else {
    dollar = (amount / 100).toFixed(2);
    console.log(dollar);
}