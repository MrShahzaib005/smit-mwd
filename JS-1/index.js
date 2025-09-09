
// let weather = prompt("Plz enter the weather today");

// if ( weather == "cloudy") {
//     console.log("We will go to Islamabad club for horse riding");
// }
// else if ( weather == "rainy") {
//     console.log("We will go to Monal");
// }
// else if ( weather == "sunny") {
//     console.log("We will go t naran");
// }
// else if ( weather == "snow") {
//     console.log("We will go to club")
// }
// else {
//     console.log("We will stay home weather is unpredictable");
    
// }

function atm(amount) {
    let notes = [5000, 1000, 500, 100, 50, 10];
    let result = {};

    for (let note of notes) {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result[note] = count;
            amount = amount % note;
        }
    }

    console.log("Breakdown:");
    for (let note in result) {
        console.log(`${result[note]} x ${note}`);
    }
}

// Take input from user
let userAmount = parseInt(prompt("Enter the amount:"));

if (!isNaN(userAmount) && userAmount > 0) {
    atm(userAmount);
} else {
    console.log("Please enter a valid amount!");
}
