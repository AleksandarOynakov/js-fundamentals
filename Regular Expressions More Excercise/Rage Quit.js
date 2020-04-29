function solve(string) {
    let uniquePattern = /\D/g;
    let digitPattern = /\d+/g;
    let matchPattern = /\D+\d+/g;
    let uniqueChar = new Set();
    let output = '';
    let outputForUnique = '';
    if (valid = string[0].match(matchPattern)) {
        for (const match of valid) {
            if (validDigit = match.match(digitPattern)) {
                let forPrint = match.slice(0, match.length - validDigit[0].length);
                for (let index = 0; index < validDigit[0]; index++) {
                    output += forPrint.toUpperCase();
                    if (index < 1) {
                        outputForUnique += forPrint.toUpperCase();
                    }
                }
            }
        }
    }
    if (valid = outputForUnique.match(uniquePattern)) {
        valid.forEach(char => {
            uniqueChar.add(char);
        });
    }
    console.log(`Unique symbols used: ${Array.from(uniqueChar).length}`)
    console.log(output)
}




solve(['a10b1c10jj@@0']);
