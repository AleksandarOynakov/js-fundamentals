function solve(stringArray) {
    let register = {};
    let keyHistory = [];
    for (const string of stringArray) {

        if (string.length > 2) {
            let array = string.slice(1, -1).split(", ").map(Number);

            array.sort((a, b) => b - a);
            if (!register.hasOwnProperty(array[0])) {
                register[array[0]] = [];
                register[array[0]].push(array);
                keyHistory.push(array[0]);
            }
            else {
                let check = false;
                for (const arrayREG of register[array[0]]) {
                    check = true;
                    for (let i = 0; i < arrayREG.length; i++) {
                        if (array[i].toFixed(2) != arrayREG[i].toFixed(2) || arrayREG.length != array.length) {
                            check = false;
                            break;
                        }

                    }
                    if (check) {
                        break;
                    }
                }
                if (!check && array.length > 0) {
                    register[array[0]].push(array);
                    keyHistory.push(array[0]);
                }
            }
        }
    }

    let output = [];
    for (const key of keyHistory) {

        output.push(register[key].shift());

    }

    output.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length < b.length) {
            return -1;
        }
        return 0;
    })

    for (const arr of output) {
        console.log(`[${arr.join(", ")}]`)
    }
}

solve([
    "[1.1]",

    "[3, 2, 1.1]",

    "[3]",

    "[1.1, 2.000000, 3.0]",

    "[1.2, 2.000000, 3.0]",

    "[1.2, 2.000000, 3.0]",

    "[1.2, 2.000000, 3.0]"

]);