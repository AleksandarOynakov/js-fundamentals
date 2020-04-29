function solve(inputMatrix) {

    let checker = true;
    for (let i = 0; i < inputMatrix.length; i++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let j = 0; j < inputMatrix[0].length; j++) {
            sumRow += Number(inputMatrix[i][j]);
            sumCol += Number(inputMatrix[j][i]);
        }
        if (sumRow !== sumCol) {
            checker = false;
            break;
        }
    }
    console.log(checker);
}

solve([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);

solve([[11, 32, 45],

[21, 0, 1],

[21, 1, 1]]);

solve([[1, 0, 0],

[0, 0, 1],

[0, 1, 0]]);