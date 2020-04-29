function solve(inputArray) {
    let result = "";

    for (let i = 0; i < inputArray.length; i++) {
        let checker = 0;
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] <= inputArray[j]) {
                checker++;
            }
        }
        if(checker === 0){
            result += `${inputArray[i]} `
        }
    }
    console.log(result);
}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);