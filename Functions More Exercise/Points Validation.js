function solve(inputArray){
    x1 = Number(inputArray.shift());
    y1 = Number(inputArray.shift());
    x2 = Number(inputArray.shift());
    y2 = Number(inputArray.shift());
    let distanceCheck = (x1,y1,x2,y2) => {
        let result = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2-y1),2));
        if(Number.isInteger(result)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    distanceCheck(x1,y1,0,0);
    distanceCheck(x2,y2,0,0);
    distanceCheck(x1,y1,x2,y2);
}


solve([2,1,1,1])