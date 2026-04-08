
// Part 1: Date Display

// Create a new Date object representing today
var today = new Date();

// getMonth() returns 0–11, so add 1 to get the month
var rawMonth = today.getMonth() + 1;
var rawDay   = today.getDate();
var rawYear  = today.getFullYear();

// month and day with a leading zero when they are single digits
// String() converts the number to a string so we can check its length
var month = rawMonth < 10 ? "0" + rawMonth : String(rawMonth);
var day   = rawDay   < 10 ? "0" + rawDay   : String(rawDay);
var year  = String(rawYear);

// Build the formatted date string
var formatDate = "Today is " + month + "/" + day + "/" + year;

// Inject the result directly into the page 
document.getElementById("dateOutput").textContent = formatDate;



// Part 2: Number Conversion

// --- Define four separate starting values as strings ---
var valA = "67";        // numeric string — whole number
var valB = "20.26";     // numeric string — decimal
var valC = "javascript";     // non-numeric string — will become NaN
var valD = "2000";       // numeric string — whole number

// --- Convert each value using Number() ---
var convertedA = Number(valA);
var convertedB = Number(valB);
var convertedC = Number(valC);
var convertedD = Number(valD);

// --- Check isNaN for each converted value ---
var isNanA = Number.isNaN(convertedA);   // false
var isNanB = Number.isNaN(convertedB);   // false
var isNanC = Number.isNaN(convertedC);   // true  → NaN
var isNanD = Number.isNaN(convertedD);   // false

// --- Check isInteger for each converted value ---
var isIntA = Number.isInteger(convertedA);   // true
var isIntB = Number.isInteger(convertedB);   // false — is a decimal
var isIntC = Number.isInteger(convertedC);   // false — NaN is not an integer
var isIntD = Number.isInteger(convertedD);   // true

// --- Build result rows for display ---
var rowA = "Original: \"" + valA + "\"  →  Converted: " + convertedA +
           "  →  isNaN: " + isNanA + "  →  isInteger: " + isIntA;

var rowB = "Original: \"" + valB + "\"  →  Converted: " + convertedB +
           "  →  isNaN: " + isNanB + "  →  isInteger: " + isIntB;

var rowC = "Original: \"" + valC + "\"  →  Converted: " + convertedC +
           "  →  isNaN: " + isNanC + "  →  isInteger: " + isIntC;

var rowD = "Original: \"" + valD + "\"  →  Converted: " + convertedD +
           "  →  isNaN: " + isNanD + "  →  isInteger: " + isIntD;

// --- Combine all rows into one HTML string and inject into the page ---
var conversionHTML =
  "<p>" + rowA + "</p>" +
  "<p>" + rowB + "</p>" +
  "<p>" + rowC + "</p>" +
  "<p>" + rowD + "</p>";

document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// Part 3: Math & Formatting


// --- Define numeric values for a simple price calculator ---
var itemPrice   = 49.99;   // price of an item 
var taxRate     = 0.0975;  // 9.75% sales tax rate
var shippingCost = 5.99;   // flat shipping fee

// --- Perform calculations ---
// Addition: subtotal is item price plus shipping
var subtotal = itemPrice + shippingCost;

// Multiplication: calculate the tax amount
var taxAmount = itemPrice * taxRate;

// Addition: total cost combines subtotal with tax
var totalCost = subtotal + taxAmount;

// --- Format results ---
// toFixed(2) rounds to two decimal places for currency display
var formattedSubtotal = subtotal.toFixed(2);
var formattedTax      = taxAmount.toFixed(2);
var formattedTotal    = totalCost.toFixed(2);

// toLocaleString() formats a large number with locale-appropriate commas
var largeNumber          = 1500000;
var formattedLargeNumber = largeNumber.toLocaleString();

// Number.parseFloat() to demonstrate parsing a float from a string
var parsedFloat = Number.parseFloat("3.14159");

// --- Build the math output HTML ---
var mathHTML =
  "<p><strong>Item Price:</strong> $" + itemPrice.toFixed(2) + "</p>" +
  "<p><strong>Shipping:</strong> $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Subtotal (item + shipping):</strong> $" + formattedSubtotal + "</p>" +
  "<p><strong>Tax (9.75%):</strong> $" + formattedTax + "</p>" +
  "<p><strong>Total Cost:</strong> $" + formattedTotal + "</p>" +
  "<hr style='border-color:rgba(255,255,255,0.15);margin:0.75rem 0;'>" +
  "<p><strong>Large number demo:</strong> " + largeNumber + " → formatted: " + formattedLargeNumber + "</p>" +
  "<p><strong>Number.parseFloat(\"3.14159\"):</strong> " + parsedFloat + "</p>";

document.getElementById("mathOutput").innerHTML = mathHTML;


// Part 4: Conditionals

// --- if/else #1: Check whether convertedC is NaN ---
// Uses isNanC which was set in Part 2 above
var nanMessage;
if (isNanC === true) {
  nanMessage = "\"hello\" converted to NaN — this value is <strong>not a valid number</strong>.";
} else {
  nanMessage = "\"hello\" converted successfully to a number.";
}

// --- if/else : Check whether convertedB is an integer ---
var integerMessage;
if (Number.isInteger(convertedB)) {
  integerMessage = convertedB + " is an integer.";
} else {
  integerMessage = convertedB + " is <strong>not an integer</strong> — it has a decimal component.";
}

// --- if/else : check on total cost ---
var budgetMessage;
if (totalCost >= 60) {
  budgetMessage = "Total of $" + formattedTotal + " is <strong>$60 or above</strong> — this order is pricey!";
} else {
  budgetMessage = "Total of $" + formattedTotal + " is under $60 — reasonable price.";
}

// --- Inject all conditional results into the page ---
var conditionalHTML =
  "<p>① NaN check → " + nanMessage + "</p>" +
  "<p>② Integer check → " + integerMessage + "</p>" +
  "<p>③ Budget check → " + budgetMessage + "</p>";

document.getElementById("conditionalOutput").innerHTML = conditionalHTML;
