function solve(inputArray) {
    for (let i = 0; i < inputArray.length ; i++) {
        for (let j = i + 1; j < inputArray.length  ; j++) {
            if (inputArray[i] == inputArray[j ]) {
                inputArray.splice(j , 1);
                i--;
            }
        }
    }
    let result = "";
    for (let i of inputArray) {
        result += `${i} `;
    }
    console.log(result);
}


solve([1,1,1,1])