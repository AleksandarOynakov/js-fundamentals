function solve(input) {
    let pattern = /(?<cash>[\@\#\^\$]+)/g;
    let lines = input[0].split(/[\,]/g).map(line => line.trim());
    for (const line of lines) {
        if (line.length === 20) {
            let firstHalf = line.slice(0, line.length / 2);
            let secHalf = line.slice(line.length / 2, line.length);
            if (valid = firstHalf.match(pattern)) {
                if (validSec = secHalf.match(pattern)) {
                    let first = valid.join('');
                    let sec = validSec.join('');
                    if (sec.length > first.length) {
                        let temp = first;
                        first = sec;
                        sec = temp;
                    }
                    if (first.includes(sec) && sec.length >= 6) {
                        if (sec.length >= 6 && sec.length <= 9) {
                            console.log(`ticket "${line}" - ${sec.length}${sec[0]}`);
                        }
                        else if (sec.length === 10) {
                            console.log(`ticket "${line}" - ${sec.length}${sec[0]} Jackpot!`);
                        }
                    }
                    else {
                        console.log(`ticket "${line}" - no match`)
                    }
                }
            }
            else {
                console.log(`ticket "${line}" - no match`)
            }
        }
        else if (line.length < 1) {

        }
        else {
            console.log('invalid ticket');
        }
    }
}

solve(['####################']);