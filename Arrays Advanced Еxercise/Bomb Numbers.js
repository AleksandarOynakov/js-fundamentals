function solve(numbers, bombArr) {
    let bomb = bombArr.shift();
    let power = bombArr.shift();
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === bomb) {
            let indexSplice = i - power;
            let indexSpliceEnd = power * 2 + 1;
            if ((indexSplice) < 0) {
                indexSplice = 0
            }
            if (indexSpliceEnd > (numbers.length - 1)) {
                indexSpliceEnd = numbers.length;
            }
            numbers.splice(indexSplice, indexSpliceEnd);
            i--;
        }
    }
    let result = 0;
    for (let i of numbers) {
        result += i;
    }
    console.log(result);
}

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],

    [2, 1])