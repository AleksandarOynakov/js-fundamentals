function solve(inputArrayFirst, inputArraySec) {
    let thirdArray = [];
    for (let i = 0; i < inputArrayFirst.length; i++) {
        if (i % 2 == 0) {
            thirdArray.push(Number(inputArrayFirst[i]) + Number(inputArraySec[i]));
        }
        else {
            thirdArray.push(`${inputArrayFirst[i]}${inputArraySec[i]}`);
        }
    }
    let result = "";
    for (let i = 0; i < thirdArray.length; i++) {
        if(i !== thirdArray.length - 1){
            result += `${thirdArray[i]} - `
        }
        else{
            result += `${thirdArray[i]}`
        }
    }
    console.log(result);
}

solve(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])

solve(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44']);