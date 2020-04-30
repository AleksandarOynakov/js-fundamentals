function solve(inputArray) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < inputArray.length; i++) {
        Number(inputArray[i]) % 2 === 0
        ? sumEven += Number(inputArray[i])
        : sumOdd += Number(inputArray[i]);
    }
    console.log(sumEven - sumOdd);
}


solve(['1', '2', '3', '4', '5', '6']);
solve(['2', '4', '6', '8', '10']);
solve(['3','5','7','9']);