function solve(input) {
    let days = 0;
    let consumed = 0;
    while (input >= 100) {
        consumed += input - 26;
        input -= 10;
        days++;
    }
    if (consumed !== 0) {
        consumed -= 26;
    }
    console.log(days);
    console.log(consumed);
}

solve(111);