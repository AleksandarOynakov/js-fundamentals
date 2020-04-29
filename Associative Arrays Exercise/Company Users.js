function solve(input) {
    let register = {};

    for (const line of input) {
        let [company, id] = line.split(" -> ");
        if (!register.hasOwnProperty(company)) {
            register[company] = new Set();
        }
        register[company].add(id)
    }

    let keys = Object.keys(register).sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        console.log(key);
        for (const person of register[key].values()) {
            console.log(`-- ${person}`);
        }
    }
}


solve([

    'SoftUni -> AA12345',

    'SoftUni -> BB12345',

    'Microsoft -> CC12345',

    'HP -> BB12345'

])