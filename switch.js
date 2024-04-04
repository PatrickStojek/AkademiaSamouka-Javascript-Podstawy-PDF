/* Use Case of switch in javascript */
const monthNumber = parseInt(prompt('enter the month number', 0));
let monthName;

switch(monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    //// and so on
    default:
        alert("invalid month number")
        break
}
alert(monthName)


