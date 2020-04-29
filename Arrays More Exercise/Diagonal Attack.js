function solve(inputArray) {
    let rows = inputArray.length;
    let matrix = [];
    let lastElem = String(inputArray[0]).split(" ").length - 1;
    let firstElem = 0;
    let sumMainDiag = 0;
    let sumSecDiag = 0;

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        let elements = String(inputArray[i]).split(" ");
        for (let j = 0; j < elements.length; j++) {
            matrix[i][j] = Number(elements[j]);
            if (j === firstElem) {
                sumMainDiag += matrix[i][firstElem];
            }
            if (j == lastElem) {
                sumSecDiag += matrix[i][lastElem];
            }
        }
        firstElem++;
        lastElem--;
    }
    firstElem = 0;
    lastElem = String(inputArray[0]).split(" ").length - 1;
    if (sumMainDiag === sumSecDiag) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (j !== firstElem && j !== lastElem) {
                    matrix[i][j] = sumMainDiag;
                }
            }
            firstElem++;
            lastElem--;
        }
    }
    for(let i = 0 ; i< matrix.length;i++){
        let result = "";
        for(let j = 0 ; j < matrix[0].length ; j++){
           result += `${matrix[i][j]} `;
        }
        console.log(result)
    }

}

solve(['5 3 12 3 1',

    '11 4 23 2 5',

    '101 12 3 21 10',

    '1 4 5 2 2',

    '5 22 33 11 1']);

    solve(['1 1 1',

    '1 1 1',
    
    '1 1 0']);