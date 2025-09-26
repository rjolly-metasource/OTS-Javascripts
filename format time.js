var badDate = "22 Mar 2024"; //Bad Date is YEAR field [jobState.getIndexValueByName(YEAR")]
var goodDate; // corrected year

function formatDate(badDate) {
    var year = badDate.substring(7, 11);
    return year;
}

// Example usag
var formattedDate = formatDate(badDate); // Output: "2024"
goodDate = (formattedDate)
//setIndexValueByName("YEAR", goodDate, true)
console.log(goodDate);
