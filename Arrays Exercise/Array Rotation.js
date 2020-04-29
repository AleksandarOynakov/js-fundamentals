function solve(inputArray, rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = inputArray.shift();
        inputArray.push(element);
    }
    let result = "";
    for (let elem of inputArray) {
        result += `${elem} `;
    }
    console.log(result);
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);