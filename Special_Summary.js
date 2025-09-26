var currentPage = 1;
var reportName = "TK ELEV MFG  GENERAL LEDGER SPECIAL BY ACCOUNT"
var reportType;
if (currentPage) {
    console.log("The Report Name is " + reportName);
    if (reportName.includes("SUMMARY")) {
        reportType = "GL080-06 Systems G/L Summary"
        console.log("The Report Type is " + reportType);
    }
    else {
        reportType = "GL080-06 Systems G/L Special Summary"
        console.log("The Report Type is " + reportType)
    }
}