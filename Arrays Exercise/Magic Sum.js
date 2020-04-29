function solve(inputArray, number) {
    let result = "";
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (Number(inputArray[i]) + Number(inputArray[j]) === number) {
                result += `${inputArray[i]} ${inputArray[j]}`
                console.log(result);
            }
            result = "";
        }
    }
}

solve([1, 7, 6, 2, 19, 23],8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6],6);
