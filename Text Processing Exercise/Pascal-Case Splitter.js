function solve(text) {
    let result = '';
    for (const char of text) {
        if (char >= 'A' && char <= 'Z') {
            result += `, ${char}`;
        }
        else{
            result += char;
        }
    }
    console.log(result.slice(2,result.length))
}

solve('SplitMeIfYouCan')