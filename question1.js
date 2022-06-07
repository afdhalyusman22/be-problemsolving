console.log("question 1");

const prompt = require("prompt-sync")({
    sigint: true
});


let finePerDay = 15,
    finePerMonth = 500,
    finePerYear = 12000,
    dateExpected,
    dateActual,
    expected,
    actual;
//validate input date
try {

    expected = prompt("Input Expected Return. Ex: 12 6 2022 (day month year) : ");
    let splitExpected = expected.split(' ');
    dateExpected = new Date(splitExpected[2], splitExpected[1], splitExpected[0]);

    actual = prompt("Input Actual Return. Ex: 28 6 2022 (day month year) : ");
    let splitActual = actual.split(' ');
    dateActual = new Date(splitActual[2], splitActual[1], splitActual[0]);

    if (dateActual <= dateExpected) { //rule 1
        console.log(0)
    } else if (splitExpected[2] === splitActual[2] && splitExpected[1] === splitActual[1] && splitActual[0] > splitExpected[0]) { //rule 2
        let diffTime = Math.abs(dateActual - dateExpected);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays * finePerDay);
    } else if (splitExpected[2] === splitActual[2] && splitActual[1] > splitExpected[1]) { //rule 3
        let diffMonth = splitActual[1] - splitExpected[1];
        console.log(diffMonth * finePerMonth);
    } else if (splitActual[2] > splitExpected[2]) { //rule 4
        console.log(finePerYear)
    }
} catch (error) {
    console.log(`error`, error);
}