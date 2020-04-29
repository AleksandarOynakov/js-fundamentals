function solve(input) {
    let neighborhoodNames = input.shift().split(", ");
    let register = new Map();
    for (const neighborhood of neighborhoodNames) {
        register.set(neighborhood, []);
    }

    for (const personInfo of input) {
        let [nName, personName] = personInfo.split(" - ");
        if (neighborhoodNames.includes(nName)) {
            register.get(nName).push(personName);
        }
    }

    let sorted = Array.from(register.entries()).sort((a, b) => b[1].length - a[1].length);

    for (const [key, value] of sorted) {
        console.log(`${key}: ${value.length}`);
        for (const person of value) {
            console.log(`--${person}`)
        }
    }
}



solve(['Abbey Street, Herald Street, Bright Mews',

    'Bright Mews - Garry',

    'Bright Mews - Andrea',

    'Invalid Street - Tommy',

    'Abbey Street - Billy'])