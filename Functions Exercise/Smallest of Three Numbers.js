function solve(first, sec, third) {
    let output = [];
    output.push(first,sec,third);
    
    console.log(output.sort((a,b) => a-b)[0])
}

solve(1,2,3)