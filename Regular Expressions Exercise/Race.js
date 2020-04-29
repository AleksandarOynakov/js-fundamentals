function solve(input) {
    let letterPattern = /[A-Za-z]+/g;
    let digitPattern = /\d/g;
    let register = {};
    let names = input.shift();
    input.forEach(line => {
        if (line != 'end of race') {
            let name = line.match(letterPattern).join('');
            let dist = line.match(digitPattern).map(Number).reduce((total, num) => total + num);
            if (!register.hasOwnProperty(name) && names.includes(name)) {
                register[name] = dist;
            }
            else if (names.includes(name)) {
                register[name] += dist;
            }
        }
    });
    let sorted = Object.entries(register).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);