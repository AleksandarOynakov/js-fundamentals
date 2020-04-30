function solve(input) {
    let key = Number(input.shift());
    let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*!(?<status>[GN])!/g;
    for (const cryptedMessage of input) {
        if (cryptedMessage != 'end') {
            let decrypted = '';
            for (const char of cryptedMessage) {
                decrypted += String.fromCharCode(char.charCodeAt() - key);
            }

            while (valid = pattern.exec(decrypted))
                if (valid.groups['status'] === 'G') {
                    console.log(valid.groups['name']);
                }
        }
        else {
            break;
        }
    }
}

solve([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
])

