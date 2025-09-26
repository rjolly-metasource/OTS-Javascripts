const number = 12345678;
const formattedCurrency = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})
console.log(formattedCurrency);
