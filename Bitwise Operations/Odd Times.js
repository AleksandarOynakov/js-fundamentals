function solve(input){
    let numbers = input.split(" ").map(Number);
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {      
            result = result ^ numbers[i];
    }
    console.log(result)
}

solve('5 5 7 2 7 5 2');


