function solve(firstArray, secondArray) {
    let arrFirst = [];
    let arrSec = [];
    for (let i = 0; i < firstArray.length; i++) {
        arrFirst.push(Number(firstArray[i]));
        arrSec.push(Number(secondArray[i]));
    }

    let eq = true;
    let sum = 0;
    for (let i = 0; i < arrFirst.length; i++) {
        if (arrFirst[i] !== arrSec[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            eq = false;
            break;
        }
        else {
            sum += arrFirst[i];
        }
    }

    if (eq) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);