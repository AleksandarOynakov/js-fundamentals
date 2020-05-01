function solve(input) {
    let email = input.shift();

    let upper = email => {
        email = email.toUpperCase();
        console.log(email);
        return email;
    };
    let lower = email => {
        email = email.toLowerCase();
        console.log(email);
        return email;
    };

    let getDomain = (email, count) => {
        console.log(email.slice(email.length - count, email.length));
    };

    let getUsername = email => {
        if (email.includes('@')) {
            let [username, domain] = email.split('@');
            console.log(username);
        }
        else {
            console.log(`The email ${email} doesn't contain the @ symbol.`)
        }
    };

    let replaceChar = (email, char) => {
        while (email.includes(char)) {
            email = email.replace(char, '-');
        }
        console.log(email);
        return email;
    };

    let encrypt = email => {
        let output = [];
        for (const char of email) {
            output.push(char.charCodeAt())
        }
        console.log(output.join(' '));
    };


    for (const line of input) {
        if (line != 'Complete') {
            if (line === 'Make Upper') {
                email = upper(email);
            }
            else if (line === 'Make Lower') {
                email = lower(email);
            }
            else if (line.includes('GetDomain')) {
                let count = line.slice(line.length - 1, line.length);
                getDomain(email, count);
            }
            else if (line === 'GetUsername') {
                getUsername(email);
            }
            else if (line.includes('Replace')) {
                let char = line.slice(line.length - 1, line.length);
                email = replaceChar(email, char);
            }
            else if (line === 'Encrypt') {
                encrypt(email);
            }
        }
        else {
            break;
        }
    }
}

solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete'
]);

