function solve(inputArray) {
    let len = Number(inputArray.pop())


    for (let i = 0; i < len; i++) {
        let element = inputArray.shift();
        inputArray.push(element);
    }

    let result = "";
    for (let elem of inputArray) {
        result += `${elem} `;
    }
    console.log(result);
}
solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
