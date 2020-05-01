function solve(input) {
    let register = {};
    for (const line of input) {
        if (line === 'Statistics') {
            break;
        }
        let parts = line.split('->');

        if (parts[0] === 'Add') {
            if (!register.hasOwnProperty(parts[1])) {
                register[parts[1]] = [];
            }
            else {
                console.log(`${parts[1]} is already registered`);
            }
        }
        else if (parts[0] === 'Send') {
            if (register.hasOwnProperty(parts[1])) {
                register[parts[1]].push(parts[2]);
            }
        }
        else if (parts[0] === 'Delete') {
            if (register.hasOwnProperty(parts[1])) {
                delete register[parts[1]];
            }
            else {
                console.log(`${parts[1]} not found!`);
            }
        }
    }
    let sorted = Object.entries(register).sort((a, b) => {
        if(a[1].length > b[1].length){
            return -1;
        }
        else if(a[1].length - b[1].length){
            return 1;
        }
        else{
            return (a[0]).localeCompare(b[0]);
        }
    });
    console.log(`Users count: ${sorted.length}`);
    for (const user of sorted) {
        console.log(user[0]);
        for (const message of user[1]) {
            console.log(` - ${message}`);
        }
    }
}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Add->Fuk',
    'Statistics'
]);