function solve(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (i < matrix.length - 1) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    counter++;
                }
            }
        }

        for (let j = 0; j < matrix[0].length - 1; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

solve([
    ['2', '3', '4', '7', '0'],

    ['4', '0', '5', '3', '4'],

    ['2', '3', '5', '4', '2'],

    ['9', '8', '7', '5', '4']])

solve([
    ['2', '2', '5', '7', '4'],

    ['4', '0', '5', '3', '4'],

    ['2', '5', '5', '4', '2']])




