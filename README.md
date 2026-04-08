# COMP484-hw9

https://steven-guapo.github.io/COMP484-hw9/


hw9screenshot.PNG




//Built-In Objects / Methods Used 

new Date() | Part 1 : creates the current date object 
.getMonth() | Part 1 : retrieves 0-based month 
.getDate() | Part 1 : retrieves day of month 
.getFullYear() | Part 1 : retrieves 4-digit year 
Number() | Part 2 : converts string values to numbers 
Number.isNaN() | Part 2 : checks if a converted value is NaN 
Number.isInteger() | Part 2 : checks if a value is a whole number 
.toFixed(2) | Part 3 : rounds price values to 2 decimal places 
.toLocaleString() | Part 3 : formats large numbers with commas 
Number.parseFloat() | Part 3 : parses a float from a string 
if / else | Part 4 : conditional logic for NaN, integer, and budget checks 
document.getElementById() | All parts DOM injection 
.innerHTML | All parts updating page content


//Reflection

The easiest part of this assignment was Part 3 (math and formatting) because the arithmetic operators behave exactly like regular math and toFixed() is intuitive for anyone who has worked with currency. The hardest part was Part 1 specifically the Date object because of the zero-based month indexing (getMonth() returns 0 for January) which was easily overlooked. I also learned that the Date object is essentially a constructor that captures a snapshot of the current moment from the browser and you have to manually extract and format each component rather than getting a pre-formatted string. For the Number object, the most interesting discovery was that Number.isNaN() behaves differently from the global isNaN() the static method only returns true for actual NaN values not coerced ones. Displaying results in the browser taught me the difference between textContent (safe plain text) and innerHTML (allows HTML tags) and reinforced why the <script> tag should be placed at the end of <body> so the DOM elements exist before JavaScript tries to reference them.

