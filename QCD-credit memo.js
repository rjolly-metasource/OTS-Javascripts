let amount = '$10,175.11CR';
let creditAmount;
if (amount.endsWith('CR')) {
    creditAmount = amount.replace("$", "($").replace("CR", ")");
    console.log(creditAmount);
}
else {

    console.log(amount);
}