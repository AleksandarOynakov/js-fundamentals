function solve(json) {
    let dictionary = [];
    for (const string of json) {
        let obj = JSON.parse(string);
        let key = Object.keys(obj);
        let check = true;
        for (const element of dictionary) {
            if (element.hasOwnProperty(key[0])) {
                element[key[0]] = obj[key[0]];
                check = false;
            }
        }
        if (check) {
            dictionary.push(obj);
        }

    }
    dictionary.sort((a,b) =>{
        let keyA = Object.keys(a);
        let keyB = Object.keys(b);
        return keyA[0].localeCompare(keyB[0]);
    })
    for (const term of dictionary) {
        let key = Object.keys(term);
        console.log(`Term: ${key[0]} => Definition: ${term[key[0]]}`)
    }
}

solve([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

    '{"Coffee":"laino."}'

]);