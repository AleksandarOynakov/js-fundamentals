function solve(input) {

    let patternDigit = /\d/g;
    let patternEmoji = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let coolTreshold = 1;
    let coolEmoji = [];
    let countEmoji = 0;
    while (valid = patternDigit.exec(input)) {
        coolTreshold *= Number(valid[0]);
    }
    while (valid = patternEmoji.exec(input)) {
        let sum = 0;
        for (const char of valid.groups['emoji']) {
            sum += char.charCodeAt();
        }
        if (sum >= coolTreshold) {
            coolEmoji.push(valid[0]);
        }
        countEmoji++;
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${countEmoji} emojis found in the text. The cool ones are:`);
    console.log(coolEmoji.join('\n'));
}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);