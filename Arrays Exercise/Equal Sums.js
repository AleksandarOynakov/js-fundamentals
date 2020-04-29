function solve(inputArray) {

    let checker = false;
    for (let i = 0; i < inputArray.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;

        for (let j = 0; j < i; j++) {
            sumRight += Number(inputArray[j]);
        }

        for (let g = i + 1; g < inputArray.length; g++) {
            sumLeft += Number(inputArray[g]);
        }

        if(sumRight === sumLeft){
            console.log(i);
            checker = true;
        }
    }

    if(!checker){
        console.log(`no`);
    }
}

solve([1, 2, 3, 3])
solve([1,2]);
solve([1]);
solve([1,2,3])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);