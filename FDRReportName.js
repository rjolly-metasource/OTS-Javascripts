var reportType = jobState.getXftFieldOnPage("REPORT TYPE");
var reportName;

//lib.logInfo("Line 5 Description1 is " + descONE);

if (reportType) {
	switch (ReportType) {
		case "CD-006":
			reportName = "CREDIT LIFE FEES";
			break;
		case "CD-011":
			reportName = "Non-Mon Entry List";
			break;
		case "CD-028":
			reportName = "Tape Transmission Accepted";
			break;
		case "CD-029":
			reportName = "Tape Transmission Rejected";
			break;
		case "CD-051":
			reportName = "Non Mon Journal";
			break;
		case "CD-051E":
			reportName = "Non Mon Journal - Employee";
			break;
		case "CCD-052":
			reportName = "Unposted non mon items";
			break;
		case "CD-053":
			reportName = "Unposted mon items";
			break;
		case "CD-061":
			reportName = "New Accounts Journal";
			break;
		case "CD-071":
			reportName = "NMonetary Transaction Journal";
			break;
		case "CD-072":
			reportName = "NRpt of Adjustments";
			break;
		case "CD-084":
			reportName = "DEBIT CARD TRANSACTION REPORT";
			break;
		case "CD-112":
			reportName = "Cardholder Exceptions";
			break;
	}

}