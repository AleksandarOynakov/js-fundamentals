function solve(inputArr) {
    inputArr = inputArr.map(Number);

    function cal(parsedArr) {
        if (parsedArr.length !== 1) {
            let condensed = [];
            for (let i = 0; i < parsedArr.length - 1; i++) {
                condensed.push((parsedArr[i] + parsedArr[i + 1]))
            }
            cal(condensed);
        }
        else {
            console.log(parsedArr.toString())
        }
    }
    cal(inputArr);
}

solve(['1'])