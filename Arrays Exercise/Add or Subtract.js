function solve(inputArray) {
    let parsedArray = [];
    let sumOriginal = 0;
    let sumMod = 0;
    for (let i = 0; i < inputArray.length; i++) {
        parsedArray.push(Number(inputArray[i]));
        sumOriginal += parsedArray[i];
        if (parsedArray[i] % 2 === 0) {
            parsedArray[i] += i;
        }
        else {
            parsedArray[i] -= i;
        }
        sumMod += parsedArray[i];
    }
    console.log(parsedArray);
    console.log(sumOriginal);
    console.log(sumMod);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);