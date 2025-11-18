// rptDate example: "09/25/2509/25/25"
function getFirstDateString(rptDate) {
    // Match first M(M)/d(d)/yy or yyyy
    var m = rptDate.match(/^\d{1,2}\/\d{1,2}\/\d{2}/);
    console.log(m);
    return m[0];//? m[1] : null;
    
}

// Example
var rptDate = "09/25/2509/25/25";
var firstDateStr = getFirstDateString(rptDate);
console.log(firstDateStr); // -> "09/25/25"
