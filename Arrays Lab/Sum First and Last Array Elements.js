function solve(inputArray) {
    let firstElement = Number(inputArray[0]);
    let lastElement = Number(inputArray[inputArray.length - 1]);

    console.log(`${firstElement + lastElement}`);
}

solve(['10', '17', '22', '33']);