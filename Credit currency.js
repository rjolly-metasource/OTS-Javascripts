const input = '$456.78CR';
const numericValue = parseFloat(input.replace(/[^\d.-]/g, ''));

// Divide by 100 to convert cents to dollars
const dollars = numericValue / 100;

// Convert to negative value
const negativeDollars = -dollars;

// Format with commas for thousands separator
const formattedDollars = negativeDollars.toLocaleString('en-US', { maximumFractionDigits: 2 });
console.log(formattedDollars);