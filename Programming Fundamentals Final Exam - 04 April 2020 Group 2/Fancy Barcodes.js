function solve(input) {
    let pattern = /\@\#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])\@\#+/;
    let patternDigit = /\d/g;
    let countInputs = input.shift();

    for (let index = 0; index < countInputs; index++) {
        if (valid = pattern.exec(input[index])) {
            let output = '';
            while (validDigit = patternDigit.exec(valid[0])) {
                output += validDigit[0];
            }
            if (output === '') {
                output = '00';
            }
            console.log(`Product group: ${output}`)
        }
        else {
            console.log('Invalid barcode');
        }
    }
}

solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);