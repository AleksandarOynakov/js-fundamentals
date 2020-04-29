function solve(input){
    let result = [];
    for(let i of input){
        if(i >= 0){
            result.push(i);
        }
        else{
            result.unshift(i);
        }
    }

    for (let j of result) {
        console.log(j);
    }
}

solve([7,-2,8,9]);