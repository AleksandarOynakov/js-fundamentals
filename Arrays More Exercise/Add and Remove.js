function solve(inputArray) {
    let countAdd = 1;
    let result = [];
    let resultString = "";
    let empty = false;
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === 'add'){
            result.push(countAdd);
            countAdd++;
        }
        else{
            if(result.length !== 0){
                result.pop();
            }
            else{
                resultString = `Empty `;
                break;
            }
        }
    }


    for(let elem of result){
        resultString += `${elem} `;
    }
    console.log(resultString);
   
    
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove'])
