function solve(num) {
    let print = num / 10;
    let result = '';
    for (let index = 1; index < 11; index++) {
        if(index > print){
            result += '.';
        }
        else{
            result += '%';
        }
    }
    console.log(`${num}% [${result}]`);
}

solve(30);