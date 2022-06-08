console.log("question 2");

const prompt = require("prompt-sync")({
    sigint: true
});

let length, array, input;

try {
    length = prompt("Input length array Ex: 5 : ");
    input = prompt("Input array. Ex: 3 5 2 (must be same with length array) : ");
    array = input.split(' ');

    length = parseInt(length);

    if(array.length === parseInt(length)){
        let result = findElement(array, length);
        console.log(`output : ${result}`);

    } else console.log("input length and length array not same");
    
} catch (error) {
    console.log(error);
    
}

function findElement(arr, n) {
    // get right sum array from 0
    var rightSum = Array(n).fill(0);
    rightSum[0] = parseInt(arr[0]);
    for (i = 1; i < n; i++)
        rightSum[i] = rightSum[i - 1] + parseInt(arr[i]);

    // get left sum array from n-1
    var leftSum = Array(n).fill(0);
    leftSum[n - 1] = parseInt(arr[n - 1]);
    for (i = n - 2; i >= 0; i--)
        leftSum[i] = leftSum[i + 1] + parseInt(arr[i]);
    
    // check sums are same.
    for (i = 1; i < n - 1; i++)
        if (rightSum[i] == leftSum[i])
            return "YES";

    return "NO";
}