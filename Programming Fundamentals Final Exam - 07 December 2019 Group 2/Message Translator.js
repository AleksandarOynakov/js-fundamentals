function solve(input) {
    let iterations = input.shift();
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
    for (let index = 0; index < iterations; index++) {
        let line = input.shift();
        if (valid = pattern.exec(line)) {
            let result = '';
            for (const char of valid.groups['message']) {
                result += `${char.charCodeAt()} `;
            }
            console.log(`${valid.groups['command']}: ${result}`);
        }
        else {
            console.log('The message is invalid');
        }
    }
}

solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);