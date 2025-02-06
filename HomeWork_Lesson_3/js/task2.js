let currentDay = new Date().getDay();
let today = document.querySelector("#currentDay");

switch (currentDay) {
    case 0: today.innerHTML = "Today is Sunday";
        break;
    case 1: today.innerHTML = "Today is Monday";
        break;
    case 2: today.innerHTML = "Today is Tuesday";
        break;
    case 3: today.innerHTML = "Today is Wednesday";
        break;
    case 4: today.innerHTML = "Today is Thursday";
        break;
    case 5: today.innerHTML = "Today is Friday";
        break;
    case 6: today.innerHTML = "Today is Saturday";
        break;
}
/* if (currentDay == 0) {
     today.innerHTML = "Today is Sunday";
 } if (currentDay == 1) {
     today.innerHTML = "Today is Monday";
 }
 if (currentDay == 2) {
     today.innerHTML = "Today is Tuesday";
 }
 if (currentDay == 3) {
     today.innerHTML = "Today is Wednesday";
 }
 if (currentDay == 4) {
     today.innerHTML = "Today is Thursday";
 }
 if (currentDay == 5) {
     today.innerHTML = "Today is Friday";
 }
 if (currentDay == 6) {
     today.innerHTML = "Today is Saturday";
 } */