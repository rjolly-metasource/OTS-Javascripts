/*You can achieve this conversion in JavaScript by following these steps:

1. Convert the string "1345678CR" to a number, keeping in mind that the last two digits represent cents.
2. Divide the number by 100 to convert it to a decimal format.
3. Add a negative sign to convert it to a negative value.
4. Format the number with commas for thousands separators.
5. Add a decimal point and format the cents with two digits after the decimal point.

Here's the JavaScript code to accomplish this:*/
var value = amount.endsWith("CR"); //amount is the value of the Invoice amount XFT field
switch (value) {
	//Handle credits
	case CR:
		function convertCRtoCurrency(input) {
			// Remove non-numeric characters and convert to number
			const numericValue = parseFloat(input.replace(/[^\d.-]/g, ''));

			// Divide by 100 to convert cents to dollars
			const dollars = numericValue / 100;

			// Convert to negative value
			const negativeDollars = -dollars;

			// Format with commas for thousands separator
			const formattedDollars = negativeDollars.toLocaleString('en-US', { maximumFractionDigits: 2 });

			// Return the formatted result
			return formattedDollars;
			/*Example usage:
			const result = convertCRtoCurrency("1345678CR");
			console.log(result); // Output: "-13,456.78"
			*/
		}
		break

	default:


		//This code will correctly convert "1345678CR" to "-13,456.78" as desired.

		//HANDLE STANDARD AMOUNTS
		//To convert the number 12345678 to US currency format in JavaScript, you can use the `toLocaleString` method with the appropriate options. Here's how you can do it:

		const value = 12345678; //This should be the XFT field for amount
		const formattedCurrency = value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})
		break


		console.log(formattedCurrency); // Output: "$12,345,678.00"

}
//This code will convert the number 12345678 to the US currency format, resulting in "$12,345,678.00".