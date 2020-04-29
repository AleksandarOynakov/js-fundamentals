function solve(x, y) {
    
    let matrix = [];
    let counter = 1;
    let startRow = 0;
    let endRow = x - 1;
    let startCol = 0;
    let endCol = y - 1;

    for(let i = 0 ; i< x;i++){
        matrix[i] = [];
        for(let j = 0 ; j < y ; j++){
            matrix[i][j] = "";
        }
    }
    console.log(matrix)


    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = Number(counter);
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = Number(counter);
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = Number(counter);
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = Number(counter);
            counter++;
        }
        startCol++;
    }

    for(let i = 0 ; i< x;i++){
        let result = "";
        for(let j = 0 ; j < y ; j++){
           result += `${matrix[i][j]} `;
        }
        console.log(result)
    }
}

solve(5,5);