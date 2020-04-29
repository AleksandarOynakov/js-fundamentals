function solve(first, second, third) {
    let calculation = (first, second, third) => {
        let counter = 0;
        if (first < 0) {
            counter++
        }
        if (second < 0) {
            counter++;
        }
        if (third < 0) {
            counter++;
        }
        if (counter % 2 != 0 && first != 0 && second != 0 && third != 0) {
            console.log('Negative');
        }
        else {
            console.log('Positive');
        }
    }
    calculation(first, second, third);
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-1, 0, 1);