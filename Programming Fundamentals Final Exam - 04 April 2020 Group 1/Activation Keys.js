function solve(input) {
    let key = input.shift();

    let flip = (key, type, startIndex, endIndex) => {
        let substring = '';
        if (type == 'Upper') {
            substring = key.substring(startIndex, endIndex).toUpperCase();
        }
        else {
            substring = key.substring(startIndex, endIndex).toLowerCase();
        }
        key = key.slice(0, startIndex) + substring + key.slice(endIndex, key.length);
        console.log(key);
        return key;
    };

    let sliceIndex = (key, startIndex, endIndex) => {
        key = key.slice(0, startIndex) + key.slice(endIndex, key.length);
        console.log(key);
        return key;
    };

    for (const line of input) {
        if (line === 'Generate') {
            console.log(`Your activation key is: ${key}`)
            break;
        }
        let commands = line.split('>>>');
        switch (commands[0]) {
            case 'Contains':
                if (key.includes(commands[1])) {
                    console.log(`${key} contains ${commands[1]}`);
                }
                else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                key = flip(key, commands[1], commands[2], commands[3]);
                break;
            case 'Slice':
                key = sliceIndex(key, commands[1], commands[2]);
                break;
        }
    }
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])