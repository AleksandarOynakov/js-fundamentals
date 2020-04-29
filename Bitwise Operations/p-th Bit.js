function solve(number,p){
    let shifted = number >> p;
    console.log(shifted & 1,number.toString(2));
}


solve(2145,5);
solve(512,0);
solve(111,8);