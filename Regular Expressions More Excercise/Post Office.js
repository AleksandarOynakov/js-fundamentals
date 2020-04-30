function solve(input) {
    // let patternFirstChar = /(?<first>[\#\$\%\*\$])(?<startChar>[A-Z]+)(?<sec>[\#\$\%\*\$])/g;

    let patternFirstChar = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g;
    let [firstPart, secPart, thirdPart] = input[0].split('|');
    let register = [];
    while (valid = patternFirstChar.exec(firstPart)) {
        for (const char of valid[0]) {
            register.push(char);
        }
        register.shift();
        register.pop();
        register = register.join('');
    }


    for (const letter of register) {
        let asciiCode = letter.charCodeAt();
        let patternWordInfo = new RegExp(`(?<ascii>${asciiCode}):(?<len>\\d{2})`, `g`)
        let valid = patternWordInfo.exec(secPart);
        let index = secPart.indexOf(valid[0])
        secPart = secPart.slice(0, index) + secPart.slice(index + valid[0].length, secPart.length);
        let missingCharsCount = Number(valid.groups['len']);
        let patternWord = new RegExp(`(?<=\\s|^)${letter}[^\\s]{${missingCharsCount}}(?=\\s|$)`, `g`);
        let validWord = patternWord.exec(thirdPart);
        if (validWord) {
            let indexWord = thirdPart.indexOf(validWord[0]);
            thirdPart = thirdPart.slice(0, indexWord) + thirdPart.slice(indexWord + validWord[0].length, thirdPart.length);
            console.log(validWord[0]);
        }
    }
}

solve([
    'Urgent"Message.TO$#POAMLA#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23-65:03-)77:05ACCSS76:05ad|Anii Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
])
