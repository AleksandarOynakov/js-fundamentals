function solve(input) {
    let register = {};
    let unliked = 0;
    for (const line of input) {
        let [command, guest, meal] = line.split('-');
        if (line === 'Stop') {
            break;
        }
        if (command === 'Like') {
            if (!register.hasOwnProperty(guest)) {
                register[guest] = [];
                register[guest].push(meal);
            }
            else if (!register[guest].includes(meal)) {
                register[guest].push(meal);
            }
        }
        else {
            if (!register.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            }
            else if (!register[guest].includes(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
            }
            else {
                let index = register[guest].indexOf(meal);
                register[guest].splice(index, 1);
                unliked++;
                console.log(`${guest} doesn't like the ${meal}.`)
            }
        }
    }
    let sorted = Object.entries(register).sort((a, b) => {
        if (a[1].length > b[1].length) {
            return -1;
        }
        else if (a[1].length < b[1].length) {
            return 1;
        }
        else {
            return (a[0]).localeCompare(b[0]);
        }
    });

    for (const guest of sorted) {
        console.log(`${guest[0]}: ${guest[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${unliked}`);
}

solve([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
])