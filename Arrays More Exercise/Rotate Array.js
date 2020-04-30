function solve(inputArray) {
    let len = Number(inputArray.pop())
    for (let i = 0; i < len; i++) {
        let element = inputArray.pop();
        inputArray.unshift(element);
    }

    console.log(inputArray.join(' '));
}
solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
