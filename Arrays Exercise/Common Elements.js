function solve(inputArrayFirst, inputArraySec) {
    let matched = [];
    for (let i = 0; i < inputArrayFirst.length; i++) {
        for (let j = 0; j < inputArraySec.length; j++) {
            if (inputArrayFirst[i] === inputArraySec[j]) {
                matched.push(inputArrayFirst[i]);
            }
        }
    }

    for (let num of matched) {
        console.log(num);
    }

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],

    ['Petar', 10, 'hey', 4, 'hello', '2'])

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

    ['s', 'o', 'c', 'i', 'a', 'l'])