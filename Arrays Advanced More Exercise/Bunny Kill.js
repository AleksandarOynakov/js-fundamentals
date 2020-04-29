function solve(field) {
    let indexesRaw = String(field.pop()).split(" ");
    let sum = 0;
    let counterKill = 0;

    Array.prototype.blow = function (rowBomb, colBomb) {
        let damage = this[rowBomb][colBomb];
        for (let row = rowBomb - 1; row <= rowBomb + 1; row++) {
            for (let col = colBomb - 1; col <= colBomb + 1; col++) {
                if (row >= 0 && row < this.length && col >= 0 && col < this[row].length) {
                    this[row][col] = this[row][col] - damage;
                }
            }
        }
    };

    let matrix = [];
    for (let row of field) {
        matrix.push(row.split(" "));
    }

    for (let element of indexesRaw) {
        let indexes = element.split(",");
        let row = indexes.shift();
        let col = indexes.shift();
        if (!(Number.isNaN(Number(row)) || Number.isNaN(Number(col)))) {
            if ((Number(matrix[Number(row)][Number(col)])) > 0) {
                sum += Number(matrix[Number(row)][Number(col)]);
                counterKill++;
                matrix.blow(Number(row), Number(col));
            }

        }
    }

    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i].map(a => {
            if (typeof (a) == "string") {
                return Number(a);
            }
            else {
                return a;
            }
        }))
    }


    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[0].length; j++) {
            if (result[i][j] > 0) {
                counterKill++;
                sum += result[i][j];
            }
        }
    }
    console.log(sum);
    console.log(counterKill);
}


solve([
    '5 10 15 20',

    '10 10 10 10',

    '10 15 10 10',

    '10 10 10 10',

    ''])