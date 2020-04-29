function solve(number){
    let shifted = number >> 1;
    console.log(shifted & 1,number.toString(2));
}

solve(2);
solve(51);
solve(13);
solve(24);

