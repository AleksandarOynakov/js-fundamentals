function solve(inputArray) {
    let count = 0;
    let maxCount = 0;
    let elements = [];
    let prevElem = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === inputArray[i + 1]) {
            count++;
            elements.push(inputArray[i]);
            if (inputArray[i + 1] !== inputArray[i + 2]) {
                elements.push(inputArray[i + 1]);
            }
        }
        else {
            if (maxCount < count) {
                maxCount = count;
                prevElem = elements;
            }
            elements = [];
            count = 0;
        }
    }
    let result = "";
    for (let num of prevElem) {
        result += `${num} `
    }
    console.log(result);
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
solve([1,2,3,4]);