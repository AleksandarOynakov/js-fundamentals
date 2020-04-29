function solve(text) {
    let first = text.slice(0, text.length / 2);
    let sec = text.slice(text.length / 2, text.length);
    console.log(first.split("").reverse().join(""));
    console.log(sec.split("").reverse().join(""));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');