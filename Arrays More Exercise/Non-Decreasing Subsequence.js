function solve(inputArray) {
    let output = [];
    inputArray = inputArray.map(Number);
    for (const number of inputArray) {
        if (output.length > 0) {
            if (output[output.length - 1] <= number) {
                output.push(number);
            }
        }
        else {
            output.push(number);
        }
    }
    console.log(output.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
solve([-1, -2, -3, -4])