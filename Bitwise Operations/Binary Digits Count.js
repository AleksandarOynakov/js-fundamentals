function solve(number,digit){
    let counter = 0;
    let binaryNumber = number.toString(2);
    for (let char = 0; char < binaryNumber.length; char++) {
        if(digit == binaryNumber[char]){
            counter++;
        }
    }
    console.log(counter);
}

solve(20,0);