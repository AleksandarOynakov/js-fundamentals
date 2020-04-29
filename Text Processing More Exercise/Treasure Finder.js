function solve(input) {
    let key = input.shift().split(" ").map(Number);
    for (const line of input) {
        let output = [];
        let position = [];
        let start = 0;
        if (line !== 'find') {
            let checkMaterial = false;
            let checkPosition = false;
            for (const char of line) {
                if (start === key.length) {
                    start = 0;
                }
                let decreasedChar = String.fromCharCode(char.charCodeAt(0) - key[start]);
                if (decreasedChar === '&') {
                    checkMaterial = !checkMaterial;
                    start++;
                    continue;
                }
                if (decreasedChar === '<') {
                    checkPosition = !checkPosition;
                    start++;
                    continue;
                }
                if (checkMaterial) {
                    output.push(decreasedChar);
                }
                if (checkPosition && decreasedChar !== '>') {
                    position.push(decreasedChar);
                }

                start++;
            }
            if (output.length > 0 && position.length > 0) {
                console.log(`Found ${output.join('')} at ${position.join('')}`);
            }

        }
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);
