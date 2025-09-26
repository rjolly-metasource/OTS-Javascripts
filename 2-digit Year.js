var badDate = "1223"; //Bad Date is YEAR field [jobState.getIndexValueByName(YEAR")]
var goodDate; // corrected year

function formatDate(badDate) {
    var year = badDate.substring(2, 4);
    return year;
}

// Example usag
var formattedDate = formatDate(badDate); // Output: "2024"
goodDate = (formattedDate)
//setIndexValueByName("YEAR", goodDate, true)
console.log(goodDate);
