function solve(input) {
    for (let number of input) {
        number = String(number);
        if (number.length % 2 == 0) {
            let firstHalf = number.slice(0, number.length / 2);
            let secHalf = number.slice(number.length / 2, number.length);
            if (firstHalf === secHalf.split('').reverse().join('')) {
                console.log('true');
            }
            else {
                console.log('false');
            }
        }
        else {
            let firstHalf = number.slice(0, number.length / 2);
            let secHalf = number.slice(number.length / 2 + 1, number.length);
            if (firstHalf === secHalf.split('').reverse().join('')) {
                console.log('true');
            }
            else {
                console.log('false');
            }
        }
    }
}

solve([1010, 111]);