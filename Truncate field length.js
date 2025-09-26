var currentPage = jobState.getXifPage();
var salesorderField = jobState.getXftFieldOnPage("OriginalNumber");
//lib.logInfo("This is the value from line2 " + salesorderField);

if (currentPage) {
	var soNumber = salesorderField.substring(0, 6);
	//lib.logInfo("SALES ORDER # IS " + soNumber);
	var releaseNum = salesorderField.substring(6, 9);
	//lib.logInfo("Release Number # is " + releaseNum);
	jobState.setIndexValueByName("SALES ORDER #", soNumber, true);
	jobState.setIndexValueByName("RELEASE #", releaseNum, true);
	//jobState.modifyPageIndexName("SALES ORDER #", salesorderField , "SALES ORDER #", soNumber)
	//jobState.modifyPageIndexName("RELEASE #", salesorderField, "RELEASE #", releaseNum);
	}
else {
	//lib.logInfo("No change needed");
}

var indexFieldName = "CUST P.O. #"; 
var limit = 20; // set to Applicaation Extender max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "SALES ORDER #";
limit = 6; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "RELEASE #";
limit = 3; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "CUSTOMER #";
limit = 6; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "INV #"; 
limit = 8; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "CUST. NAME";
limit = 30; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "SHIP LOCATION";
limit = 25; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "BILL OF LADING";
limit = 20; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "CARRIER NAME";
limit = 26; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

/*
 * Reusable function to limit the length of an index field.
 */
function truncateIndexField(indexFieldName, maxLength) {
    var indexFieldValue = jobState.getXftFieldOnPage(indexFieldName);
    var len = (indexFieldValue) ? indexFieldValue.length : 0; // Use length without parentheses
    if (len > maxLength) {
        // truncate string
        var newvalue = indexFieldValue.substring(0, maxLength); // Declare newvalue
        // overwrite the value
        jobState.setIndexValueByName(indexFieldName, newvalue, true);
        lib.logInfo("Updated index field '" + indexFieldName + 
                    "'\r\n  From [" + indexFieldValue + "]\r\n    To [" + newvalue + "]");
    } else if(len>0) {
    	jobState.setIndexValueByName(indexFieldName, indexFieldValue, true);
    }
}

