function solve(input) {
    let people = [];
    for (const name of input) {
        let personalNum = name.length;
        let obj = { name, personalNum };
        people.push(obj);
    }

    for (const person of people) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`)
    }
}

solve([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);