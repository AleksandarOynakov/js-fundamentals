function solve(input) {
    let k = input.shift();
    let result = "";
    for (let i = 0; i < k; i++) {
        result += `${input[i]} `;
    }
    console.log(result);
    result = ""
    for (let i = input.length - k; i < input.length; i++) {
        result += `${input[i]} `;
    }
    console.log(result);
}

solve([2, 7, 8, 9]);


solve([3, 6, 7, 8, 9]);
