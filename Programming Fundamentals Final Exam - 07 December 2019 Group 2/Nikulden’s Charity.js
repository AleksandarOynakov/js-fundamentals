function solve(input) {
    let text = input.shift();

    let replaceChar = (text, currentChar, newChar) => {
        while (text.includes(currentChar)) {
            text = text.replace(currentChar, newChar);
        }
        console.log(text);
        return text;
    };

    let cut = (text, startIndex, endIndex) => {
        if (startIndex >= 0 && startIndex < text.length &&
            endIndex >= 0 && endIndex < text.length) {
            text = text.slice(0, startIndex) + text.slice(endIndex + 1, text.length);
            console.log(text);
        }
        else {
            console.log('Invalid indexes!');
        }
        return text;
    };

    let makeUL = (text, type) => {
        if (type === 'Upper') {
            text = text.toUpperCase();
        }
        else {
            text = text.toLowerCase();
        }
        console.log(text);
        return text;
    };

    let sum = (text, startIndex, endIndex) => {
        if (startIndex >= 0 && startIndex < text.length &&
            endIndex >= 0 && endIndex < text.length) {
            let substring = text.slice(startIndex, endIndex + 1);
            let sum = 0;
            for (const char of substring) {
                sum += char.charCodeAt();
            }
            console.log(sum);
        }
        else {
            console.log('Invalid indexes!');
        }
    };

    for (const line of input) {
        if (line === 'Finish') {
            break;
        }

        if (line.includes('Replace')) {
            let [command, currentChar, newChar] = line.split(' ');
            text = replaceChar(text, currentChar, newChar);
        }
        else if (line.includes('Cut')) {
            let [command, startIndex, endIndex] = line.split(' ');
            text = cut(text, Number(startIndex), Number(endIndex));
        }
        else if (line.includes('Make')) {
            let [command, type] = line.split(' ');
            text = makeUL(text, type);
        }
        else if (line.includes('Check')) {
            let [command, string] = line.split(' ');
            if (text.includes(string)) {
                console.log(`Message contains ${string}`);
            }
            else {
                console.log(`Message doesn't contain ${string}`);
            }
        }
        else if (line.includes('Sum')) {
            let [command, startIndex, endIndex] = line.split(' ');
            sum(text, Number(startIndex), Number(endIndex));
        }
    }
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);