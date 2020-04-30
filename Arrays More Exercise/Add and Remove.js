function solve(inputArray) {
    let count = 1;
    let output = [];
    for (const command of inputArray) {
        switch (command) {
            case 'add':
                output.push(count);
                break;
            case 'remove':
                if (output.length > 0) {
                    output.pop();
                }
                break;
        }
        count++;
    }
    if (output.length === 0) {
        console.log('Empty');
    }
    else {
        console.log(output.join(' '))
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove'])
