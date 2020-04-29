function solve(inputArr) {
    let parsedArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        parsedArr.push(Number(inputArr[i]));
    }

    cal(parsedArr);


}

function cal(parsedArr){
    let condensed = [];
    for (let i = 0; i < parsedArr.length - 1; i++) {
        condensed.push((parsedArr[i] + parsedArr[i+1]))
    }
   
        
    if(condensed.length !== 1){
        cal(condensed);
    }
    else{
        console.log(condensed.toString())
    }
}


solve(['1', '2', '3', '4', '5', '6']);
solve(['2', '4', '6', '8', '10']);
solve(['3', '5', '7', '9']);
solve(['2','10','3'])