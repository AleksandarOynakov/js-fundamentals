function solve(string, repeat) {
    let repeater = (string, repeat) => {
        let result = "";
        for (let i = 0; i < repeat; i++) {
            result += string;
        }
        return result;
    };
    console.log(repeater(string, repeat));
}

solve("abc",3);