function solve(num) {
    num = String(num);
    let sumOdd = 0;
    let sumEven = 0;
    for (let digit of num) {
        digit = Number(digit);
        if (digit % 2 === 0) {
            sumEven += digit;
        }
        else {
            sumOdd += digit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

solve(1000435);