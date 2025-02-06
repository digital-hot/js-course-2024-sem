let value = +prompt("Enter the valid year value");
isLeapYear(value);

function isLeapYear(year) {
    year = Number(year);
    if (isNaN(year)) {
        alert("Your entry is not a number. Refresh the page and try again.");
    } else if (Number.isInteger(year)) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) { alert("Leap Year") }
                else { alert("Common Year") }
            }
            else { alert("Leap Year") }
        } else { alert("Common Year") }
    }
}