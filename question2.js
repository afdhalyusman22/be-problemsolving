console.log("question 2");

const prompt = require("prompt-sync")({
    sigint: true
});

let input, student, candies, first_student, result;
try {

    input = prompt("Input. Ex: 3 5 2 (student candies first student) : ");    
    let splitInput = input.split(' ');
    student = splitInput[0];
    candies = splitInput[1];
    first_student = splitInput[2];
    result = first_student;
    if (first_student > student) {
        console.log(`first student must be lower than student`);
    } else {
        for (let i = 0; i < candies-1; i++) {
            if (result >= student) result = 1;
            else result = parseInt(result) + 1;
        }
        console.log(`output : ${result}`);
    }
} catch (error) {
    console.log(`error`, error);
}