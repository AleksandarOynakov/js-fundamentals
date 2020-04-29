function solve(input) {
    let pattern = /\w*(?<cash>[\@\#\^\$]+)\w*\k<cash>\w*/g;
    let lines = input[0].trim().split(/[\,]/g);
    for (const line of lines) {
        if (valid = pattern.exec(line)) {

            if (valid.groups['cash'].length === 10) {
                console.log(`ticket "${valid[0]}" - ${valid.groups['cash'].length}${valid.groups['cash'][0]} Jackpot!`)
            }
            else if (valid.groups['cash'].length >= 6 && valid.groups['cash'].length <= 9) {
                console.log(`ticket "${valid[0]}" - ${valid.groups['cash'].length}${valid.groups['cash'][0]}`)
            }

        }
        else if (line.trim().length === 20) {
            console.log(`ticket "${line.trim()}" - no match`)
        }
        else {
            console.log(`invalid ticket`);
        }
    }
}

solve(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,  das, is    th@@@@@@eemo@@@@@@ey, validticketnomatch:(, @@@@@@@123@@@@@@1234,######4123@@@@@@1234']);