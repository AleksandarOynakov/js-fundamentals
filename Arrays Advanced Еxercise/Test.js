let array = [1,2,4,5,6,7,8];

sum(array);

function sum(array){
    let result = [];
    for (let i = 0; i < array.length; i+=2) {   
        if(i+1>array.length -1)  {
            result.push(array[i]);
            return result;
        }
        result.push(array[i] + array[i + 1]);
    }
    return result;
}