function solve(number) {
    let numberString = String(number);
    let calculation = numberString => {
        let sum = 0;
        for (let i = 0; i < numberString.length; i++) {
            sum += Number(numberString[i]);
        }
        avg = sum / numberString.length;
        if (avg > 5) {
            console.log(Number(numberString));
        }
        else {
            numberString += "9";
            calculation(numberString);
        }

    }
    calculation(numberString);
}

solve(101);
solve(5835);