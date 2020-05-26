function nums(num){
    for (let index = 1; index <= num; index++) {
        let all = [];
        for (let number = 1; number <= index; number++) {
            all.push(index);
        }
        console.log(all.join(' '));
        all = [];
    }
}

nums(5)