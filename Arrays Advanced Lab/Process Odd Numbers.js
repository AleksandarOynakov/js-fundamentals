function solve(input) {

    let elementDouble = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            elementDouble.unshift(input[i] * 2);
        }
    }

    let result = "";
    elementDouble.forEach(element => {
        result += `${element} `;
    });

    console.log(result);
}

solve([10, 15, 20, 25]);


