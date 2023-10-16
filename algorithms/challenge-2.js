/*function checkNumber(num) {
    if (num < 0){
        console.log ("Negative")
    } else if (num > 0){
        console.log ("Positive")
    } else {
        console.log ("Zero")
    }
}

module.exports = checkNumber;
*/
// Alternate method

function checkNumber(num) {
    if (num < 0){
        return "Negative"
    } else if (num > 0){
        return "Positive"
    } else {
        return "Zero"
    }
}

module.exports = checkNumber;
