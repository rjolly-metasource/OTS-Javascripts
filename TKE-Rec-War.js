var poNUM = 'PO1234';
var newPO;

if (poNUM) {
    newPO = poNUM.replace(/^PO/gm, 'P');
    console.log(newPO);
}