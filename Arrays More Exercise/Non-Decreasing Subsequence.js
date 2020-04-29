function solve(inputArray) {
    let parsedArray = [];
    for (let num of inputArray) {
        parsedArray.push(num);
    }
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > result[result.length - 1]) {
            result.push(inputArray[i]);
        }
        if (i === 0) {
            result.push(inputArray[i])
        }
    }
    let resultString = "";
    for (let num of result) {
        resultString += `${num} `;
    }
    console.log(resultString);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);