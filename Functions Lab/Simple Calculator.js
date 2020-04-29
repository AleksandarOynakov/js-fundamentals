function solve(a, b, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result;
    switch (operation) {
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
    }
    console.log(result);
}

solve(5,5,'multiply');
solve(40,8,'divide');
solve(12,19,'add');
solve(50,13,'subtract');