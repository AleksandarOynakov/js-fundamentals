function solve(arr, commands) {

    let map = [];
    for (let row of arr) {
        map.push(row.split(" ").map(Number));
    }


    let isValid = value => {
        if (value >= 0) {
            return 1;
        }
        return 0;
    };

    Array.prototype.breeze = function (row) {
        for (let col = 0; col < 5; col++) {
            let newValue = this[row][col] - 15;
            if (isValid(newValue)) {
                this[row][col] = newValue;
            }
            else {
                this[row][col] = 0;
            }
        }
    };

    Array.prototype.gale = function (col) {
        for (let row = 0; row < 5; row++) {
            let newValue = this[row][col] - 20;
            if (isValid(newValue)) {
                this[row][col] = newValue;
            }
            else {
                this[row][col] = 0;
            }
        }
    };

    Array.prototype.smog = function (value) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                this[row][col] = this[row][col] + value;
            }
        }
    };

    Array.prototype.print = function () {
        let result = "Polluted areas: ";
        let resultLen = result.length;
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (this[row][col] >= 50) {
                    result += `[${row}-${col}], `
                }
            }
        }
        let forPrint = "";
        if (result.length == resultLen) {
            forPrint = "No polluted areas";
        }
        else {
            forPrint = result.slice(0, result.length - 2);
        }
        console.log(forPrint);
    };

    for (let pair of commands) {
        let forceValue = pair.split(" ");
        let command = forceValue.shift();
        let value = Number(forceValue.shift());

        switch (command) {
            case 'breeze':
                map.breeze(value);
                break;
            case 'gale':
                map.gale(value);
                break;
            case 'smog':
                map.smog(value);
                break;
        }
    }
    map.print();
}

solve(
    [
        "5 7 72 14 4",

        "41 35 37 27 33",

        "23 16 27 42 12",

        "2 20 28 39 14",

        "16 34 31 10 24"],

    ["breeze 1", "gale 2", "smog 25"])