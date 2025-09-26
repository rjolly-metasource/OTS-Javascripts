// Original string
const originalString = "CSB430.20240118_005916.PRN";

// Split the string by the dot
const parts = originalString.split('.');

// Extract the reportName (first part before the first dot)
const reportName = parts[0];

// Extract the reportDate (second part between the first and second dot)
const reportDateRaw = parts[1].split('_')[0]; // Further split by underscore to get the date part

// Format the date from yyyyMMdd to mm/dd/yyyy
const year = reportDateRaw.substring(0, 4);
const month = reportDateRaw.substring(4, 6);
const day = reportDateRaw.substring(6, 8);
const reportDate = `${month}/${day}/${year}`;

console.log("Report Name:", reportName);
console.log("Report Date:", reportDate);