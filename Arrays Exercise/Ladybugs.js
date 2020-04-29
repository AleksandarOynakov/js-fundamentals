function solve(commandArray) {
    let field = [];
    for (let i = 0; i < Number(commandArray[0]); i++) {
        field.push(0);
    }

    let bugIndexes = String(commandArray[1]).split(" ");
    for (let i = 0; i < bugIndexes.length; i++) {
        field[Number(bugIndexes[i])] = 1;
    }

    for (let i = 2; i < commandArray.length; i++) {
        let commands = String(commandArray[i]).split(" ");
        let ladyBug = Number(commands[0]);
        let direction = commands[1];
        let distance = Number(commands[2]);

        if (direction === 'right') {
            for (let j = 0; j < field.length; j++) {
                if (j === ladyBug) {
                    field[j] = 0;
                    if (field[j + distance] === 0) {
                        field[j + distance] = 1;
                    }
                    else if (field[j + distance] === 1) {
                        while (field[j + distance] === 1) {
                            distance += distance;
                        }
                        if (field[j + distance] === 0) {
                            field[j + distance] = 1;
                        }

                    }
                }
            }
        }
        else {
            for (let j = field.length - 1; j >= 0; j--) {
                if (j === ladyBug) {
                    field[j] = 0;
                    if (field[j - distance] === 0) {
                        field[j - distance] = 1;
                    }
                    else if (field[j - distance] === 1) {
                        while (field[j - distance] === 1) {
                            distance += distance;
                        }
                        if (field[j - distance] === 0) {
                            field[j - distance] = 1;
                        }
                    }
                }
            }
        }
    }
    let result = "";
    for(let position of field){
        result += `${position} `;
    }
    console.log(result);
}

solve([3, '0 1',

    '0 right 1',

    '2 right 1']);

solve([5, '3',

    '3 left 2',

    '1 left -2']);

solve([3, '0 1 2',

    '0 right 1',

    '1 right 1',

    '2 right 1']);