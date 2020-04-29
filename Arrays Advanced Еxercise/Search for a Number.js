function solve(numbers, operations) {
    let take = operations.shift();
    let forDelete = operations.shift();
    let numberSearch = operations.shift();

    let takeNumbers = (take, numbers) => {
        let newNumbers = [];
        for (let i = 0; i < take; i++) {
            newNumbers.push(numbers[i]);
        }
        return newNumbers;
    };

    let deleteNumbers = (forDelete, numbersTook) => {
        let indexSpliceStart = 0;
        let indexSpliceEnd = forDelete;
        if (indexSpliceEnd > (numbersTook.length - 1)) {
            indexSpliceEnd = numbersTook.length;
        }
        numbersTook.splice(indexSpliceStart, indexSpliceEnd);
        return numbersTook;
    };

    let occursNumber = (numberSearch, numbersDeleted) => {
        let counter = 0;

        for (let i = 0; i < numbersDeleted.length; i++) {
            if (numberSearch === numbersDeleted[i]) {
                counter++;
            }
        }

        console.log(`Number ${numberSearch} occurs ${counter} times.`)
    };

    let numbersTook = takeNumbers(take, numbers);
    let numbersDeleted = deleteNumbers(forDelete, numbersTook);
    occursNumber(numberSearch, numbersDeleted);
}

solve([0,0,0],

    [3, 9, 0])