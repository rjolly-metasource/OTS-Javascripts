var indexFieldName = "EMPLOYEE ID"; 
var limit = 9; // set to Applicaation Extender max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "LAST NAME";
limit = 30; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "FIRST NAME";
limit = 25; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);

indexFieldName = "MIDDLE INITIAL";
limit = 1; // set to AppEnhancer max limit
truncateIndexField(indexFieldName, limit);


function truncateIndexField(indexFieldName, maxLength) {
    var indexFieldValue = jobState.getXftFieldOnPage(indexFieldName);
    var len = (indexFieldValue) ? indexFieldValue.length : 0; // Use length without parentheses
    if (len > maxLength) {
        // truncate string
        var newvalue = indexFieldValue.substring(0, maxLength); // Declare newvalue
        // overwrite the value
        jobState.setIndexValueByName(indexFieldName, newvalue, false);
        //lib.logInfo("Updated index field '" + indexFieldName + 
                   // "'\r\n  From [" + indexFieldValue + "]\r\n    To [" + newvalue + "]");
    } else if(len>0) {
    	jobState.setIndexValueByName(indexFieldName, indexFieldValue, false);
    	//lib.logInfo(indexFieldName + "=" + indexFieldValue);
    }
}
var compName = jobState.getXftFieldOnPage("compName");
lib.logInfo("Name as it appears " + compName);
function extractNames(compName) {
  var regex = /^([^,]+),\s*([^ ]+)\s([A-Za-z])$/;
  var match = compName.match(regex);

  if (match) {
  	lib.logInfo(match);
    var lastName = match[0];
    var firstName = match[1];
    var middleInitial = match[2];

    //return { lastName + firstName + middleInitial };
    lib.logInfo("Script line 46 " + lastName + firstName + middleInitial);
  } else {
    //return null; // Invalid format
  }
}

// Example usage:
var compName = jobState.getXftFieldOnPage("compName");
var result = extractNames(compName);
lib.logInfo(result); 
if (result) {
  lib.logInfo("Script line 57 " + result); // { lastName: "Doe", firstName: "John", middleInitial: "D" }
  lib.logInfo("Script line 58 " + result.firstName);
} else {
  lib.logInfo("Script line 60: Invalid name format.");
}