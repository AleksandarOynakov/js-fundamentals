function solve(input) {
    let regs = Number(input.shift());
    let counter = 0;
    let lines = 0;
    let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P\@\$(?<password>\w{5,}.*\d+)P\@\$/;
    for (const line of input) {
        if(lines > regs - 1){
            break;
        }
        if (valid = pattern.exec(line)) {
            console.log('Registration was successful');
            console.log(`Username: ${valid.groups['username']}, Password: ${valid.groups['password']}`)
            counter++;
        }
        else {
            console.log('Invalid username or password');
        }
        lines++;
    }
    console.log(`Successful registrations: ${counter}`);
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$',
    'U$MichaelU$P@$asdqwe123P@$'
])