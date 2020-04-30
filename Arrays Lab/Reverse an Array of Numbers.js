function solve(n, inputArray) {
    let reversedArray = [];

    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(Number(inputArray[i]))
        output += `${Number(inputArray[i])} `;
    }
    console.log(output);
}

solve(2,['10', '17', '22', '33'])