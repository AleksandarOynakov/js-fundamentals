function solve(input){
    let pattern = /(?<=\ )[a-z\d][a-z\.\-\_\d]+[^\-\.\_]@\w+([\-\.]\w+)+\b/g;
    for (const line of input) {
        while(valid = pattern.exec(line) ){
            console.log(valid[0]);
        }
    }
}

solve([ 'Please contact us at: support@github.com.', 'end' ]);