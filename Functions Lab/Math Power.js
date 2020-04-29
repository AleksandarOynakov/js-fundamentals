function solve(number,power){
    let calculation = (number,power) => {
        let result = number;
        for (let i = 0; i < power - 1 ; i++) {
            result *= number;
        }
        return result;
    }

    console.log(calculation(number,power));
}

solve(2,8);
solve(3,4);