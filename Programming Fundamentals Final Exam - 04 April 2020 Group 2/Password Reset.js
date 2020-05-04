function solve(input) {
    let password = input.shift();

    let takeOdd = () => {
        let output = '';
        for (let index = 0; index < password.length; index++) {
            if (index % 2 != 0) {
                output += password[index];
            }
        }
        password = output;
        console.log(password);
    };

    let cut = (startIndex, len) => {
        password = password.slice(0, Number(startIndex)) + password.slice(Number(startIndex) + Number(len), password.length);
        console.log(password);
    };

    let substitute = (stringSub, sub) => {
        if (!password.includes(stringSub)) {
            console.log('Nothing to replace!');
            return;
        }
        while (password.includes(stringSub)) {
            password = password.replace(stringSub, sub);
        }
        console.log(password);
    };

    for (const line of input) {
        if (line === 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }

        let commands = line.split(' ');
        switch (commands[0]) {
            case 'TakeOdd':
                takeOdd();
                break;
            case 'Cut':
                cut(commands[1], commands[2]);
                break;
            case 'Substitute':
                substitute(commands[1], commands[2]);
                break;
        }
    }
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);