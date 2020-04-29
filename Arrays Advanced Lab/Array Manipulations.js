function solve(input) {
    let arrayNumbers = String(input.shift()).split(" ");

    input.forEach(element => {
        let commandValue = element.split(" ");
        let command = commandValue.shift();
        let value = commandValue.shift();
        

        switch (command) {
            case 'Add':
                arrayNumbers.push(value);
                break;
            case 'Remove':
                arrayNumbers = arrayNumbers.filter(el => el !== value);
                break;
            case 'RemoveAt':
                arrayNumbers.splice(value, 1);
                break;
            case 'Insert':
                let indexInsert = Number(commandValue.shift());
                arrayNumbers.splice(indexInsert, 0, value);
                break;
        }

    });

    let result = "";
    for (let i of arrayNumbers) {
        result += `${i} `;
    }
    console.log(result);
}
solve(['',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3']);