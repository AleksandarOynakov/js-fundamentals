function solve(inputArray) {
    let reversedArray = [];
    let output = "";

    for (let i = inputArray.length - 1; i >= 0; i--) {
        reversedArray.push(String(inputArray[i]))
        output += `${String(inputArray[i])} `;
    }
    console.log(output);
}

solve(['33', '123', '0', 'dd']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);