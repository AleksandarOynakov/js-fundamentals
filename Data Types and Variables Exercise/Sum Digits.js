function sum(num){
    let sum = 0;
    for (const digit of String(num)) {
        sum += Number(digit);
    }
    return sum;
}