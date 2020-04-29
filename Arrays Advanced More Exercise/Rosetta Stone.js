function solve(input) {
    let templateLen = Number(input.shift());

    //Parse template matrix to numbers
    let templateMatrix = [];
    for (let i = 0; i < templateLen; i++) {
        let templateStrings = input.shift();
        templateMatrix.push(templateStrings.split(" ").map(Number));
    }

    //Parse message matrix to numbers;
    let messageMatrix = [];
    for (let i = 0; i < input.length; i++) {
        let messageStrings = input[i];
        messageMatrix.push(messageStrings.split(" ").map(Number));
    }
 
    
    let shiftRows = templateMatrix.length;
    let shiftCols = templateMatrix[0].length;
    //Shifts template matrix over the message matrix
    for (let messageRow = 0; messageRow < messageMatrix.length; messageRow += shiftRows) {
        for (let messageCol = 0; messageCol < messageMatrix[messageRow].length; messageCol += shiftCols) {

            for (let templateRow = 0; templateRow < templateMatrix.length; templateRow++) {
                for (let templateCol = 0; templateCol < templateMatrix[0].length; templateCol++) {
                    let targetRow = templateRow + messageRow;
                    let targetCol = templateCol + messageCol;
                    if (targetRow < messageMatrix.length && targetCol < messageMatrix[0].length) {
                        let encodedSum = messageMatrix[targetRow][targetCol] + templateMatrix[templateRow][templateCol];
                        encodedSum %= 27;
                        if (encodedSum == 0) {
                            messageMatrix[targetRow][targetCol] = ' ';
                        }
                        else {
                            messageMatrix[targetRow][targetCol] = String.fromCharCode(encodedSum + 64);
                        }
                    }

                }
            }

        }
    }

    //Convert matrix to final result
    let result = "";
    for (let i = 0; i < messageMatrix.length; i++) {
        for (let j = 0; j < messageMatrix[0].length; j++) {
            result += messageMatrix[i][j];
        }

    }

    console.log(result);
}

solve(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);