This refers to format time.js

Format a date in dd MMM yyyy as yyyy in javascript using Java's SimpleDateFormat substring method
Sure, you can also use JavaScript's `substring` method to extract the year part from the date string. Here's how you can do it:

```javascript
function formatDate(dateString) {
  var year = dateString.substring(7, 11);
  return year;
}

// Example usage
var formattedDate = formatDate("22 Mar 2024"); // Output: "2024"
console.log(formattedDate);
```

In this code snippet, `substring(7, 11)` extracts characters from index 7 to index 10 (exclusive) from the input date string, which corresponds to the year part. This method returns a new string containing those characters, which represents the year.
