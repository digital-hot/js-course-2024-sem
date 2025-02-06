let value = prompt("Enter your number");
OddOrEven(value);

function OddOrEven(number) {
    if (isNaN(number)) {
        alert("Your entry is not a number. Refresh the page and try again.");
    }
    else {
        number = Number(number);
        if (Number.isInteger(number)) {
            if (number % 2 == 0) {
                alert("Your number is even");
            } else {
                alert("Your number is odd");
            }
        } else {
            alert("Only integer numbers are allowed. Refresh the page and try again.");
        }
    };
}