function solve(inputArray) {
    let wagons = String(inputArray.shift()).split(" ");
    let capacity = String(inputArray.shift());

    for (let i = 0; i < inputArray.length; i++) {
        let commandValue = String(inputArray[i]).split(" ");
        let command = commandValue.shift();

        if (command == 'Add') {
            let value = commandValue.shift();
            wagons.push(value);
        }
        else {
            for (let i = 0; i < wagons.length; i++) {
                if ((Number(wagons[i]) + Number(command)) <= capacity) {
                    wagons[i] = String(Number(wagons[i]) + Number(command));
                    break;
                }
            }
        }
    }

    let result = "";
    for (let i of wagons) {
        result += `${i} `;
    }
    console.log(result);
}

solve(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    'Add 10',

    '30',

    '10',

    '75'

]
)