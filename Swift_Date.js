var inputString = "08-Aug-2025";

// Regular expression to match dates in the format DD-MMM-YYYY (case insensitive)
var dateRegex = /(\d{1,2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-((19|20)\d{2})/i;

var match = inputString.match(dateRegex);

if (match) {
    // Extract day, month abbreviation, and year
    var day = match[1].padStart(2, '0');
    var monthAbbr = match[2];
    var year = match[3];

    // Map month abbreviation to month number
    var monthMap = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
        Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
    };

    var month = monthMap[monthAbbr];

    // Format the date as MM/dd/yyyy
    var formattedDate = `${month}/${day}/${year}`;
    console.log("Expiration date is " + formattedDate);
} else {
    console.log("12/31/99");
}
