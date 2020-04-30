function solve(inputArray) {
    let step = Number(inputArray.pop());
    let result = "";
    for (let k = 0; k < inputArray.length; k += step) {
        result += `${inputArray[k]} `

    }
    console.log(result);
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);